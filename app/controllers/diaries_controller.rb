class DiariesController < ApplicationController
    def index
        render json: Diary.all, status: :ok
    end

    def show
        render json: find_diary, status: :ok
    end

    def create
        new_diary = Diary.create!(diary_params)
        render json: new_diary, status: :create
    end

    def update
        update_diary = find_diary.update!(diary_params)
        render json: update_diary
    end
    
    private

    def diairy_params
        params.permit( :date, :title, :content, :tag, :image, :likes, :pet_id, :user_id )
    end

    def find_diary
        Diary.find(params[:id])
    end

end
