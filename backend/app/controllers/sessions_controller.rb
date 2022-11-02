class SessionsController < ApplicationController
  wrap_parameters format: []
  def create
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password])
      session[:user_id] = @user.id
      render json: {
        user: @user
      }
    else
      render json: {
        error: 'Could not authenticate your account'
      }, status: 401
    end
  end

  def logged_in?
    @current_user = User.find(session[:user_id])
    if session[:user_id]
      if @current_user
        render json: {
          logged_in: true,
          user: @current_user
        }
      else
        render json: {
          logged_in: false
        }
      end
    end
  end

  def destroy
    session.delete(:user_id)
    render json: { logged_out: true }, status: 200
  end

  private

  def session_params
    params.permit(:username, :password, :session, :email)
  end
end
