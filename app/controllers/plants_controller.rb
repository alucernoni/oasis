class PlantsController < ApplicationController
    before_action :find_plant
    skip_before_action :authenticate_user, only: [:index, :show, :create]

    def index
        render json: Plant.all, include: :plant_wants
    end

    def show
        render json: @plant, include: :plant_wants
    end

    def create 
        # plant = current_user.plants.create!(plant_params)
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end

    def update 
        @plant.update!(update_plant_params)
        render json: @plant, status: :accepted
    end

    def destroy 
        @plant.destroy!
        head :no_content
    end


    private 


    def find_plant
        @plant = Plant.find_by(id: params[:id])
    end

    def plant_params
        params.permit(:common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :difficulty_level, :watering_interval_days, {plant_wants: [:ideal_food_frequency, :ideal_light_level, :ideal_water_frequency]})
    end

    def update_plant_params
        params.permit(:plant_nickname, :common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :date_last_watered, :watering_interval_days, :difficulty_level, :on_wishlist, :is_owned)
    end

    # def authorize_user
    #     return if current_user === 
    # end
end
