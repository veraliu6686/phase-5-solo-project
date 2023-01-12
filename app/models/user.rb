class User < ApplicationRecord
    has_secure_password
    has_many :diaries
    has_many :pets, through: :diaries

end
