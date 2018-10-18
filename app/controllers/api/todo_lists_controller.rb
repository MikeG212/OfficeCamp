class Api::TodoListsController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    render json: TodoList.all.where(user_id: current_user.id), include: :tags
  end

  def show
    render json: TodoList.find(params[:id]), include: :tags
  end

  def create
    @todoList = current_user.todoLists.new(todoList_params)
    if @todoList.save
      render json: @todoList, include: :tags
    else
      render json: @todoList.errors.full_messages, status: 422
    end
  end

  def destroy
    @todoList = current_user.todos.find(params[:id])
    @todoList.destroy
    render json: @todoList, include: :tags
  end

  def update
    @todoList = TodoList.find(params[:id])
    if @todoList.update(todo_params)
      render json: @todoList, include: :tags
    else
      render json: @todoList.errors.full_messages, status: 422
    end
  end

  private

  def todoList_params
    params.require(:todoList).permit(:title, :body, :done, tag_names: [])
  end
end
