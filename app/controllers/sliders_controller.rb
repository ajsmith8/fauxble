class SlidersController < ApplicationController
  respond_to :json
  
  def index
    if params[:slider]
      @sliders = Slider.where(params[:slider])
    else
      @sliders = Slider.all
    end
    respond_with @sliders
  end
  
  def show
    @slider = Slider.find(params[:id])
    respond_with @slider
  end
  
  def create
    @slider = Slider.create(params[:slider])
    respond_with @slider
  end
  
  def update
    @slider = Slider.update(params[:id], params[:slider])
    respond_with @slider
  end
  
  def destroy
    @slider = Slider.destroy(params[:id])
    respond_with @slider
  end
end
