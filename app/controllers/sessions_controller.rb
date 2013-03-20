class SessionsController < ApplicationController
  def create
    #render :text => request.env["omniauth.auth"].to_yaml
    auth = request.env["omniauth.auth"]
    if User.where(uid: auth['uid'], provider: nil, signed_in_fb: true)[0]
      User.faux_user_switch(User.where(uid: auth['uid'], provider: nil)[0])
    end
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    user.encrypted_token = auth["credentials"]["token"]
    user.signed_in_fb = true
    user.save
    redirect_to root_url
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
  
  def main
    #home page ruby style
  end
end
