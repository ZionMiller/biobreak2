# frozen_string_literal: true

# app/controllers/users_controller.rb

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
      render json: {
        error: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find!(params[:id])
  end

  def current_user
    @user ||= User.find!(session[:user_id])
    if @user
      render json: { user: @user }
    else
      render json: { error: 'No user is logged in' }, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
