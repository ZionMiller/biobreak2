class UsersController < ApplicationController
  # TODO: add before action to check if user is logged in
  def create
    @user = User.create!(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {
        status: :created,
        user: @user
      }
    else
      @user.save
      render json: {
        error: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
