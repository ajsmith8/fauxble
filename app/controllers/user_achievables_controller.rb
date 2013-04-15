class UserAchievablesController < ApplicationController
  respond_to :json
  
  def index
    if params[:user_achievable]
      @user_achievables = UserAchievable.where(params[:user_achievable])
    else
      @user_achievables = UserAchievable.all
    end
    respond_with @user_achievables
  end
  
  def show
    @user_achievable = UserAchievable.find(params[:id])
    respond_with @user_achievable
  end
  
  def create
    @user_achievable = UserAchievable.create(params[:user_achievable])
    respond_with @user_achievable
  end
  
  def update
    @user_achievable = UserAchievable.update(params[:id], params[:user_achievable])
    respond_with @user_achievable
  end
  
  def destroy
    @user_achievable = UserAchievable.destroy(params[:id])
    respond_with @user_achievable
  end
end
