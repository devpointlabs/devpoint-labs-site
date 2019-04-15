class Api::CohortsController < ApplicationController
  before_action :set_cohort, only: [:show, :update, :destroy]

  def index
    render json: Cohort.all
  end

  def show
    render json: @cohort
  end

  def create
    cohort = Cohort.new(cohort_params)

    if cohort.save
      render json: cohort
    else
      render json: cohort.errors, status: 422
    end
  end

  def update
    if @cohort.update(cohort_params)
      render json: @cohort
    else
      render json: @cohort.errors, status: 422
    end
  end

  def destroy
    @cohort.destroy
  end

  private
    def set_cohort
      @cohort = Cohort.find(params[:id])
    end

    def cohort_params
      params.require(:cohort).permit(:image_url, :season, :description, :start_date, :schedule, :cost, :location)
    end
end