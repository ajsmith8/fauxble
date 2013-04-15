class TasksController < ApplicationController
  respond_to :json
  
  def index
    if params[:task]
      @tasks = Task.where(params[:task])
    else
      @tasks = Task.all
    end
    respond_with @tasks
  end
  
  def show
    @task = Task.find(params[:id])
    respond_with @task
  end
  
  def create
    @task = Task.create(params[:task])
    Rank.update_facts(@task)
    respond_with @task
  end
  
  def update
    @task = Task.update(params[:id], params[:task])
    respond_with @task
  end
  
  def destroy
    @task = Task.destroy(params[:id])
    respond_with @task
  end
end
