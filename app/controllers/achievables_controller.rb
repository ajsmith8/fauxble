#general format for controller to coordinate backbone

class AchievablesController < ApplicationController
  respond_to :json
  
  def index
    # could just do respond_with Achievable.all
    # set up this way in case I need to modify
    @achievables = Achievable.all
    respond_with @achievables
  end
  
  def show
    @achievable = Achievable.find(params[:id])
    respond_with @achievable
  end
  
  def create
    @achievable = Achievable.create(params[:achievable])
    respond_with @achievable
  end
  
  def update
    @achievable = Achievable.update(params[:id], params[:achievable])
    respond_with @achievable
  end
  
  def destroy
    @achievable = Achievable.destroy(params[:id])
    respond_with @achievable
  end
end
