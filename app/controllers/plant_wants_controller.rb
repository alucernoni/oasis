class PlantWantsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]

    def index 
        render json: PlantWant.all
    end

    def show 
        render json: @plant_wants
    end

    def create 
        plant_wants = PlantWant.create!(wants_params)
        render json: plant_wants, status: :created, status: :created
    end

    def update
        @plant_wants.update!(wants_params)
        render json: @plant_wants, status: :accepted
    end

    def destroy
        @plant_wants.destroy!
        head :no_content
    end

    private 

    def find_plant_wants
        @plant_wants= PlantWant.find_by(id: params[:id])
    end

    def wants_params
        params.permit(:ideal_water_frequency, :ideal_light_level, :ideal_food_frequency, :plant_id)
    end

end
