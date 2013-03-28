class UsersController < ApplicationController
  respond_to :json
  
  def index
    @users = User.all
    respond_with @users
  end
  
  def show
    @user = User.find(params[:id])
    respond_with @user
  end
  
  def create
    @user = User.create(params[:user])
    if !signed_in?
      session[:user_id] = @user.id
      Challenge.set_default_challenges(@user)
    end
    respond_with @user
  end
  
  def update
    @user = User.update(params[:id], params[:user])
    session[:user_id] = @user.id
    respond_with @user
  end
  
  def destroy
    @user = User.destroy(params[:id])
    respond_with @user
  end
end
