class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    include ActiveStorage::Blob:Analyzable

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end

    def create
        render json: User.create!(new_user_params), status: :created
    end

    def update
        debugger
        current_user.update!(new_user_params)
        render json: current_user
    end

    private

    def new_user_params
        params.permit( :username, :password, :email, :avatar )
    end

end
