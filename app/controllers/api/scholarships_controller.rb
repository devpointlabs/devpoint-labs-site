class Api::ScholarshipsController < ApplicationController
  before_action :set_scholarship, only: [:show, :update, ]

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

  def update
    if @scholarship.update(scholarship_params)
      render json: @scholarship
    else
      render json: { errors: @scholarship.errors.full_messages.join(',') }, status: 422      
    end
  end

  def destroy

    @scholarship = Scholarship.find(params[:id])  
    @scholarship.destroy

  end

  private
    def set_scholarship
      @scholarship = Scholarship.find(params[:id])  
    end

    def scholarship_params
      params.require(:scholarship).permit(
        :first_name, 
        :last_name, 
        :notes,
        :full, 
        :part, 
        :email, 
        :phone_number, 
        :current_city, 
        :course,
        :comments, 
        :comments1, 
        :comments2, 
        :comments3)   
    end
end
