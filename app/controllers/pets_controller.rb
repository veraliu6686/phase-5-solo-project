class PetsController < ApplicationController

    def index
        render json: Pet.all.order(:id), status: :ok
    end

    def show
        render json: find_pet, status: :ok
    end

    def create
        new_pet = Pet.create!(pet_params)
        render json: new_pet, status: :created
    end

    def update
        update_pet = find_pet.update!(pet_params)
        render json: update_pet
    end

    private

    def pet_params
        params.require(:pet).permit(:id, :name, :gender, :sterilized, :arrival_date, :weight, :image, :user_id)
    end

    def find_pet
        Pet.find(params[:id])
    end

end
