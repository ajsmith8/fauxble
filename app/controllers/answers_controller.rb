class AnswersController < ApplicationController
  respond_to :json
  
  def index
    if params[:answer]
      @answers = Answer.where(params[:answer])
    else
      @answers = Answer.all
    end
    respond_with @answers
  end
  
  def show
    @answer = Answer.find(params[:id])
    respond_with @answer
  end
  
  def create
    @answer = Answer.create(params[:answer])
    respond_with @answer
  end
  
  def update
    @answer = Answer.update(params[:id], params[:answer])
    respond_with @answer
  end
  
  def destroy
    @answer = Answer.destroy(params[:id])
    respond_with @answer
  end
end
