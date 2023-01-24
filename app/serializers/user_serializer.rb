class UserSerializer < ActiveModel::Serializer
  include Rail.application.routes.url_helpers
  attributes :id, :username, :avatar, :email, :password_digest, :number_of_pets
  has_many :diaries
  has_many :pets
  has_many :followers
  has_many :following

   def avatar
    if object.avatar.attached?
      {
        url: rails_blob_url(object.avatar, only_path: true)
      }
    end
  end
end
