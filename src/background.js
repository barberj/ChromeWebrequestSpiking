console.log('Hellow ext');

//chrome.webRequest.onBeforeSendHeaders.addListener(
//  async function(details) {
//    let person = await fetch('https://swapi.co/api/people/2').
//      then(person => person.json());
//
//    for (var i = 0; i < details.requestHeaders.length; ++i) {
//      if (details.requestHeaders[i].name === 'User-Agent') {
//        details.requestHeaders.splice(i, 1);
//        break;
//      }
//    }
//
//    details.requestHeaders.push({name: 'User-Agent', value: person.name});
//    let ret = {requestHeaders: details.requestHeaders};
//    console.log("returning ", ret);
//    return ret;
//  },
//  {urls: ['*://papertrailapp.com/*']},
//  ['blocking', 'requestHeaders']
//);

//chrome.webRequest.onBeforeSendHeaders.addListener(
//  function(details) {
//    for (var i = 0; i < details.requestHeaders.length; ++i) {
//      if (details.requestHeaders[i].name === 'User-Agent') {
//        details.requestHeaders.splice(i, 1);
//        break;
//      }
//    }
//
//    details.requestHeaders.push({name: 'User-Agent', value: "XXX"});
//    let ret = {requestHeaders: details.requestHeaders};
//    return ret;
//  },
//  {urls: ['*://papertrailapp.com/*']},
//  ['blocking', 'requestHeaders']
//);

chrome.webRequest.onAuthRequired.addListener(
  function(details, callback) {
    return fetch('https://swapi.co/api/people/2').
      then(person => person.json()).
      then(person_json => {
        console.log("name ", person_json.name);
        return callback({authCredentials: { username: person_json.name, password: "" }})
      });
  },
  {urls: ['<all_urls>']},
  ['asyncBlocking', 'responseHeaders']
);

//chrome.webRequest.onErrorOccurred.addListener(
//  function(details) {
//    console.log("Error");
//  },
//  {urls: ['<all_urls>']},
//);
//
//chrome.webRequest.onCompleted.addListener(
//  function(details) {
//    console.log("Completed ", details);
//  },
//  {urls: ['<all_urls>']},
//);
//
//chrome.webRequest.onBeforeRequest.addListener(
//  function(details) {
//    console.log("Before ", details);
//  },
//  {urls: ['<all_urls>']},
//  ["requestBody"]
//);
