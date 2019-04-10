class Api::ApplicationsController < ApplicationController
  before_action :set_application, only: [ :update, :destroy]

  def index
    render json: Application.all
  end

  def show
    @application = Application.find(params[:id])
    render json: @application
  end


  def create
    application = Application.create(application_params)
    
    if application.save
      render json: application
    else
      render json: { errors: application.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @application.update(application_params)
      render json: @application
    else
      render json: { errors: @application.errors.full_messages.join(',') }, status: 422      
    end
  end

  def destroy

    @application.destroy
  end

  private
  def set_application
    @application = Application.find(params[:id])
  end

  def application_params
    params.require(:application).permit(:first_name, :last_name, :email, :phone_number, :current_city, :comments, :comments1, :comments2, :course, :location, :grad, :experience, :gender, :social)
  end
end
