class FollowsController < ApplicationController
    def index
        render json: Follow.all
    end
    def create
        render json: Follow.create!(follow_params), status: :created
    end

    def destroy
        Follow.find_by!(follower_id: current_user.id, followed_id: params[:followed_id]).destroy
        head :no_content
    end

    private

    def follow_params
        params.require(:follow).permit(:id, :follower_id, :followed_id)
    end

end
