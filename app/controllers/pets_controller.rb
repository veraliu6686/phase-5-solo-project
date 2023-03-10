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
       find_pet.update!(pet_params)
        render json: find_pet
    end

    def destroy
        find_pet.destroy
        head :no_content
    end
    private

    def pet_params
        params.require(:pet).permit(:id, :name, :species, :gender, :sterilized, :arrival_date, :weight, :image, :user_id)
    end

    def find_pet
        Pet.find(params[:id])
    end

end
