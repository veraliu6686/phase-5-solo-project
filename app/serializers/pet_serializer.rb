class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :gender, :sterilized, :arrival_date, :weight, :image, :user_id, :days_from_today
  has_many :diaries
  has_one :user
end
