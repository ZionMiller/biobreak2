class UsersController < ApplicationController
  before_action :authorized, only: [:show]

  def create
    @user = User.create!(user_params)
    if @user.valid?
      render json: @user, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
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
