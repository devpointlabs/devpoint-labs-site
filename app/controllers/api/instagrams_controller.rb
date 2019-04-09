class Api::InstagramsController < ApplicationController
  def index
    render json: InstagramApi.user.recent_media
  end
end
