require 'instagram_api_client'

InstagramApi.config do |config|
  config.client_id = ENV['INSTAGRAM_CLIENT_ID']
  config.access_token = ENV['INSTAGRAM_ACCESS_TOKEN']
  config.client_secret = ENV['INSTAGRAM_CLIENT_SECRET']
end