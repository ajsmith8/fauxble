class UserMetricsController < ApplicationController
  respond_to :json
  
  def index
    @user_metrics = UserMetric.all
    respond_with @user_metrics
  end
  
  def show
    @user_metric = UserMetric.find(params[:id])
    respond_with @user_metric
  end
  
  def create
    @user_metric = UserMetric.create(params[:user_metric])
    respond_with @user_metric
  end
  
  def update
    @user_metric = UserMetric.update(params[:id], params[:user_metric])
    respond_with @user_metric
  end
  
  def destroy
    @user_metric = UserMetric.destroy(params[:id])
    respond_with @user_metric
  end
end
