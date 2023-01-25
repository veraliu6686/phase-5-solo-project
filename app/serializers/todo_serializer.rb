class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :category
  has_one :pet
  has_one :user
end
