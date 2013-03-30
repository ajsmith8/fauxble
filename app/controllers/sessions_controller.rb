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
    #bootstrap necessary data only
    @current_user = current_user
    @issues = Issue.all.to_json
    @questions = Question.all.to_json
    @sliders = Slider.all.to_json
    @answers = Answer.all.to_json
    @sources = Source.all.to_json
    @achievables = Achievable.all.to_json
    @users = User.all.to_json
    @comments = Comment.all.to_json
    @tasks = Task.all.to_json
    @user_achievables = UserAchievable.all.to_json
    @ranks = Rank.all.to_json
    @challenges = Challenge.all.to_json
  end
end
