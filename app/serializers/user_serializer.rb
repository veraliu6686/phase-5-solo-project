class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :email, :password_digest, :number_of_pets
  has_many :diaries
  has_many :pets
  has_many :followers
  has_many :following

end
