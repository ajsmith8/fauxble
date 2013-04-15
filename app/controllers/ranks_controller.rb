class RanksController < ApplicationController
  respond_to :json
  
  def index
    if params[:rank]
      if params[:rank][:issue_id] == ""
        @ranks = Rank.where(issue_id: nil)
      else
        @ranks = Rank.where(params[:rank])
      end
    else
      @ranks = Rank.all
    end
    respond_with @ranks
  end
  
  def show
    @rank = Rank.find(params[:id])
    respond_with @rank
  end
  
  def create
    @rank = Rank.where(user_id: params[:user_id], issue_id: params[:issue_id])[0]
    
    if !@rank
      @rank = Rank.create(params[:rank])
    end
    
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
