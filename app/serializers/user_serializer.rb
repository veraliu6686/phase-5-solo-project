class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :email, :password_digest
  has_many :diaries
  has_many :pets
end