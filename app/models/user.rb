class User < ApplicationRecord
    has_secure_password
    has_many :diaries
    has_many :pets
    has_many :todo
    has_many :followers, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy
    has_many :following, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy

    has_one_attached :avatar
    # validate :acceptable_image

    def number_of_pets
        pets.size
    end

    # def acceptable_image
    #     return unless avatar.attached?

    #     unless main_image.byte_size <= 1.megabyte
    #         errors.add(:avatar, "is too big")
    #     end

    #     acceptable_types = ["image/jpeg", "image/png"]
    #     unless acceptable_types.include?(main_image.content_type)
    #         errors.add(:avatar, "must be a JPEG or PNG")
    #     end
    # end

end
