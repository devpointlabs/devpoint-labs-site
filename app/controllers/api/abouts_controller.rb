class Api::AboutsController < ApplicationController
  before_action :set_about, only: [:show, :update, :destroy]

  def index
    render json: About.all
  end

  def show
    @about = About.find(params[:id])
    render json: @about
  end

  def create
    # binding.pry
    about = About.create(about_params)
    if about.save
      render json: about
    else
      render json: about.errors, status: 422
    end
  end

  def update
    if @about.update(about_params)
      render json: @about
    else
      render json: @about.errors, status: 422
    end
  end

  def destroy
    @about.destroy
  end

  private
    def set_about
      @about = About.find(params[:id])
    end

    def about_params
      params.require(:about).permit(:abBody1, :abBody2, :abBody3,)
    end
  
end
