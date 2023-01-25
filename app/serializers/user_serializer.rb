class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :email, :number_of_pets
  has_many :diaries
  has_many :pets
  has_many :followers
  has_many :following

end
