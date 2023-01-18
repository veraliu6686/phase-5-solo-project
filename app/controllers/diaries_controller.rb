class DiariesController < ApplicationController
    def index
        render json: Diary.all.order(created_at: :desc), status: :ok
    end

    def show
        render json: find_diary, status: :ok
    end

    def create
        new_diary = Diary.create!(diary_params)
        render json: new_diary, status: :created
    end

    def update
       find_diary.update!(diary_params)
        render json: find_diary
    end

    def destroy
        find_diary.destroy
        head :no_content
    end

    private

    def diary_params
        params.require(:diary).permit( :date, :title, :content, :tag, :image, :likes, :pet_id, :user_id )
    end

    def find_diary
        Diary.find(params[:id])
    end

end
