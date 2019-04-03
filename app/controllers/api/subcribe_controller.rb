class Api::SubcribeController < ApplicationController
  before_action :set_subscribe, only: [:show, :update, :destroy]

  def index
    render json: Subscribe.all
  end

  def show
    render json: @subscribe
  end

  def create
    subscribe = Subscribe.new(subscribe_params)
    if subscribe.save
      render json: subscribe
    else
      render json: subscribe.errors, status: 422  
    end
  end

  def destroy
    @subscribe.destroy
    render json: { message: "subscribe #{@subscribe.name} was deleted" }
  end

  private
    def set_subscribe
      @subscribe = Subscribe.find(params[:id])  
    end

    def subscribe_params
      params.require(:subscribe).permit(:email)   
    end
end
