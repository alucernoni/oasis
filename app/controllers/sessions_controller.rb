class SessionsController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    # POST '/login'
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { errors: ['Invalid credentials'] }, status: :unauthorized
      end
    end
  
    # DELETE '/logout'
    def destroy
      if current_user
        current_user = nil
        session.delete :user_id
        head :no_content
      else
        render json: { errors: "No active session" }, status: :unauthorized
      end
    end
  
  
  end