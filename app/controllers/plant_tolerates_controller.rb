class PlantToleratesController < ApplicationController
    skip_before_action :authenticate_user

    def index 
        render json: PlantTolerate.all
    end

    def show 
        render json: @plant_tolerance
    end

    def create 
        plant_tolerate = PlantTolerate.create!(tolerance_params)
        render json: @plant_tolerance, status: :created
    end

    def update
        @plant_tolerance.update!(tolerance_params)
        render json: @plant_tolerance, status: :accepted
    end

    def destroy
        @plant_tolerance.destroy!
        head :no_content
    end

    private 

    def find_plant_tolerance
        @plant_tolerance= PlantTolerate.find_by(id: params[:id])
    end

    def tolerance_params
        params.permit(:low_light, :indirect_light, :full_light, :drought, :overwatering)
    end

end
