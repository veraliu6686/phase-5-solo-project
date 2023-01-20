class User < ApplicationRecord
    has_secure_password
    has_many :diaries
    has_many :pets
    has_many :followers, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy
    has_many :following, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy

    def number_of_pets
        pets.size
    end

end
