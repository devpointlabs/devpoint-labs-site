class Api::ScholarshipsController < ApplicationController
  before_action :set_scholarship, only: [:show, :update, :destroy]

  def index
    render json: Scholarship.all
  end

  def show

    @scholarship = Scholarship.find(params[:id])
    render json: @scholarship
  end

  def create
    scholarship = Scholarship.new(scholarship_params)
    if scholarship.save
      render json: scholarship
    else
      render json: scholarship.errors, status: 422  
    end
  end

  def destroy
    @scholarship.destroy
    render json: { message: "scholarship #{@scholarship.name} was deleted" }
  end

  private
    def set_scholarship
      @scholarship = Scholarship.find(params[:id])  
    end

    def scholarship_params
      params.require(:scholarship).permit(:first_name, :last_name, :full, :part, :email, :phone_number, :current_city)   
    end
end
