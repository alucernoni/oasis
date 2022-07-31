class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def index 
        render json: User.all
    end

    # GET '/me'
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {errors: 'No active session'}, status: :unauthorized
        end
    end

    # POST '/signup'
    def create 
        user = User.create!(signup_params)
            session[:user_id] = user.id
            render json: user, status: :created
    end

    def update 
        user = User.find_by(id: params[:id]).update!(update_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def signup_params
        params.permit(:first_name, :last_name, :username, :email, :city, :state, :zipcode, :password, :password_confirmation)
    end

    def update_params
        params.permit(:first_name, :last_name, :username, :bio, :profile_image, :email, :city, :state, :zipcode, :password, :password_confirmation)
    end

end
