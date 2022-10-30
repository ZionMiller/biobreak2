# frozen_string_literal: true

# app/controllers/users_controller.rb

class UsersController < ApplicationController
  # TODO: add before action to check if user is logged in
  def create
    @user ||= User.create!(user_params)
    if @user
      session[:user_id] = @user.id
      render json: {
        user: @user
      }, status: :created
    else
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
    params.permit(:username, :first, :last, :email, :password, :password_confirmation)
  end
end
