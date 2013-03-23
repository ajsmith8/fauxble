class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :current_user, :signed_in?

  def current_user
    if session[:user_id] && User.where(id: session[:user_id])[0]
      user = User.find(session[:user_id])
    else
      user = User.create(
        signed_in: false,
        signed_in_fb: false
      )
      session[:user_id] = user.id
    end
    
    return user
  end

  def signed_in?
    !!current_user
  end
end
