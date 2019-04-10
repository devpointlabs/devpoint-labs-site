class Api::InstagramsController < ApplicationController
  def index
    # binding.pry
    render json: InstagramApi.user.recent_media
  end
end
