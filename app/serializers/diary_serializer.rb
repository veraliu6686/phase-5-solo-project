class DiarySerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :content, :tag, :image, :likes, :pet_id, :user_id
  has_one :user
  has_one :pet
end
