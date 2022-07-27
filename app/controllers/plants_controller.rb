class PlantsController < ApplicationController
    before_action :find_plant
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: Plant.all
    end

    def show
        render json: @plant
    end

    # is current user going to be problem here? maybe because only through not yet existing joiner?
    # def create 
    #     plant = current_user.plants.create!(plant_params)
    #     render json: plant, status: :created
    # end

    def update 
        @plant.update!(update_plant_params)
        render json: plant, status: :accepted
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
        params.permit(:common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :difficulty_level)
    end

    def update_plant_params
        params.permit(:plant_nickname, :common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :difficulty_level, :on_wishlist, :is_owned)
    end

    # def authorize_user
    #     return if current_user === 
    # end
end
