class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :sterilized, :arrival_date, :weight, :image
  # has_many :diaries
  # belongs_to :user
end
