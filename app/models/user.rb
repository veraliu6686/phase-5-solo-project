class User < ApplicationRecord
    has_secure_password
    has_many :diaries
    has_many :pets

    def number_of_pets 
        pets.size
    end

end
