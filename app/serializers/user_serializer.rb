class UserSerializer < ActiveModel::Serializer
# include Rail.application.routtes.url_helpers
  attributes :id, :username, :avatar, :email, :password_digest, :number_of_pets
  has_many :diaries
  has_many :pets
  has_many :followers
  has_many :following

  # def avatar_url(avatar)
  #   url_for(avatar)
  # end
end
