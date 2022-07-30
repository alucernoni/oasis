class UserPlantTasksController < ApplicationController
    
    def index 
        render json: UserPlantTask.all
    end

    

end
