class DiarySerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :content, :tag, :image, :likes, :pet_id, :user_id
  # belongs_to :user
  # belongs_to :pet
end
