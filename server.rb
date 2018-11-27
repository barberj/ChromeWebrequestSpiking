require 'sinatra'

helpers do
  def protected!
    return if authorized?
    headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
    halt 401, "Not Authorized\n"
  end

  def authorized?
    request.env["HTTP_AUTHORIZATION"] == "Basic Qy0zUE86"
    #request.env["HTTP_AUTHORIZATION"] == "Basic THVrZSBTa3l3YWxrZXI6"
  end
end

get '/' do
  protected!
  content_type :json
  { key1: 'value1', key2: 'value2' }.to_json
end
