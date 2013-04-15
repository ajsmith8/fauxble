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
    user.save
    
    redirect_to root_url
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
  
  def main
    @current_user = current_user
    @users = User.all.to_json
    
    if signed_in?
      @challenges = Challenge.get_user_challenges(@current_user).to_json
      @issues = Issue.all.to_json
      @questions = Question.all.to_json
      @achievables = Achievable.all.to_json
      @user_achievables = UserAchievable.where(user_id: @current_user.id).to_json
    else
      @challenges = [].to_json
      @issues = [].to_json
      @questions = [].to_json
      @achievables = [].to_json
      @user_achievables = [].to_json
    end
  end
end
