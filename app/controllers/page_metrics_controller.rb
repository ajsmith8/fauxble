class PageMetricsController < ApplicationController
  respond_to :json
  
  def index
    @page_metrics = PageMetric.all
    respond_with @page_metrics
  end
  
  def show
    @page_metric = PageMetric.find(params[:id])
    respond_with @page_metric
  end
  
  def create
    @page_metric = PageMetric.where(user_id: params[:user_id], page_name: params[:page_name])[0]
    
    if !@page_metric
      @page_metric = PageMetric.create(params[:page_metric])
    end
    
    respond_with @page_metric
  end
  
  def update
    @page_metric = PageMetric.update(params[:id], params[:page_metric])
    respond_with @page_metric
  end
  
  def destroy
    @page_metric = PageMetric.destroy(params[:id])
    respond_with @page_metric
  end
end
