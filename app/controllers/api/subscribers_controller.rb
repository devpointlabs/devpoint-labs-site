class Api::SubscribersController < ApplicationController
before_action :set_subscriber, only: [:show, :update, :destroy]

  def index
    render json: Subscriber.all
  end

  def show
    render json: @subscriber
  end

  def create
    subscriber = Subscriber.new(subscribe_params)
    if subscriber.save
      render json: subscriber
    else
      render json: subscriber.errors, status: 422  
    end
  end

  def destroy
    @subscriber.destroy
    render json: { message: "subscription was deleted" }
  end

  private
    def set_subscribe
      @subscriber = Subscriber.find(params[:id])  
    end

    def subscribe_params
      params.require(:subscriber).permit(:email)   
    end
end
