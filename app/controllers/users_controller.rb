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
    @user = current_user
    @user = User.update(@user.id, params[:user])
    if @user.signed_in
      Challenge.set_default_challenges(@user)
      if !session[:user_id]
        session[:user_id] = @user.id
      end
    end
    respond_with @user
  end
  
  def update
    @user = User.find(params[:id])
    if !session[:user_id]
      session[:user_id] = @user.id
    end
    user = User.update(params[:id], params[:user])
    respond_with user
  end
  
  def destroy
    @user = User.destroy(params[:id])
    respond_with @user
  end
end
