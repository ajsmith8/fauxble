class SessionsController < ApplicationController
  def create
    #render :text => request.env["omniauth.auth"].to_yaml
    auth = request.env["omniauth.auth"]
    if User.where(uid: auth['uid'], provider: nil, signed_in_fb: true)[0]
      User.faux_user_switch(User.where(uid: auth['uid'], provider: nil)[0])
    end
    
    user = User.where(provider: auth["provider"], uid: auth["uid"])[0] 
    if !user
      user = User.create_with_omniauth(auth, current_user)
    end
    session[:user_id] = user.id
    user.encrypted_token = auth["credentials"]["token"]
    user.signed_in_fb = true
    user.save
    redirect_to root_url
  end
  
  def destroy
    user = User.create()
    session[:user_id] = user.id
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
    #@challenges = (Challenge.where(user_id: @current_user.id).concat(Challenge.where(challenger_id: @current_user.id))).to_json
    #@tasks = (Task.where(user_id: @current_user.id)).to_json
    @user_achievables = UserAchievable.all.to_json
    @achievables = Achievable.all.to_json
    #if !@current_user.signed_in && !@current_user.signed_in_fb
      #@users = (User.where(signed_in: true).concat(User.where(signed_in_fb: true)).concat(User.where(id: @current_user.id))).to_json
    #else
      #@users = (User.where(signed_in: true).concat(User.where(signed_in_fb: true))).to_json
    #end
    #@page_metrics = (PageMetric.where(user_id: @current_user.id)).to_json
    #@user_metrics = (UserMetric.where(user_id: @current_user.id)).to_json
    @ranks = Rank.all.to_json
    @challenges = Challenge.all.to_json
    @tasks = Task.all.to_json
    @users = User.all.to_json
    @page_metrics = PageMetric.all.to_json
    @user_metrics = UserMetric.all.to_json
  end
end
