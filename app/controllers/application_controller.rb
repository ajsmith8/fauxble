class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :current_user, :signed_in?

  def current_user
    if session[:user_id] && User.where(id: session[:user_id])[0]
      @current_user = User.find(session[:user_id])
    else
      @current_user = nil
    end
  end

  def signed_in?
    !!current_user
  end
end
