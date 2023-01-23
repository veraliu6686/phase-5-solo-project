class TodosController < ApplicationController

    def index
        render json: Todo.all, status: :ok
    end

    def create
        render json: Todo.create!(todo_params), status: :created
    end

    def destroy
        Todo.find_by_id(params[:id]).destroy
        head :no_content
    end

    private

    def todo_params
         params.permit( :date, :title, :category, :pet_id, :user_id )
    end

end
