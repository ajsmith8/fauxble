class FeedbacksController < ApplicationController
  respond_to :json
  
  def index
    @feedbacks = Feedback.all
    respond_with @feedbacks
  end
  
  def show
    @feedback = Feedback.find(params[:id])
    respond_with @feedback
  end
  
  def create
    @feedback = Feedback.create(params[:feedback])
    respond_with @feedback
  end
  
  def update
    @feedback = Feedback.update(params[:id], params[:feedback])
    respond_with @feedback
  end
  
  def destroy
    @feedback = Feedback.destroy(params[:id])
    respond_with @feedback
  end
end
