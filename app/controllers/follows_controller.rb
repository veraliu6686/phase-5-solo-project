class FollowsController < ApplicationController
    def index
        render json: Follow.all
    end
    def create
        render json: Follow.create(follower_id: current_user.id, followed_id: params[:id]), status: :created
    end

    def destroy
        Follow.find_by(follower_id: current_user.id, followed_id: params[:id]).destroy
        head :no_content
    end

    # # get list of following users
    # def following
    #     render json: Follow.where(follower_id: current_user.id), status: :ok
    # end

    # # get list of followers
    # def followers
    #     render json: Follow.where(followed_id: params[:id]),status: :ok
    # end
     private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end

end
