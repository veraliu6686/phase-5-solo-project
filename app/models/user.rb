class User < ApplicationRecord
    has_secure_password
    has_many :diaries
    has_many :pets
    has_many :todo
    has_many :followers, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy
    has_many :following, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy

    validates :password, format: { with: /\A(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+\z/,
        message: "must include at least one capital letter, one lowercase letter, and one number" },
        if: :password_required?
    validates :password, length: { minimum: 8, message: "must be at least 8 characters long" }, unless: :password_blank?

    def password_required?
        !password.blank?
    end

    def password_blank?
        password.blank?
    end

    def number_of_pets
        pets.size
    end

end
