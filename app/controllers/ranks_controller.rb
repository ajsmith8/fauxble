class RanksController < ApplicationController
  respond_to :json
  
  def index
    @ranks = Rank.all
    respond_with @ranks
  end
  
  def show
    @rank = Rank.find(params[:id])
    respond_with @rank
  end
  
  def create
    @rank = Rank.create(params[:rank])
    respond_with @rank
  end
  
  def update
    @rank = Rank.update(params[:id], params[:rank])
    respond_with @rank
  end
  
  def destroy
    @rank = Rank.destroy(params[:id])
    respond_with @rank
  end
end
