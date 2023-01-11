class User < ApplicationRecord
has_secure_password
has_many :pets
has_many :diaries

end
