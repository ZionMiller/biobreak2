class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    @user = User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  def authorized
    logged_in?
  end
end
