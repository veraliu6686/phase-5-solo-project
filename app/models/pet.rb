class Pet < ApplicationRecord
     has_many :diaries
     has_many :users, through: :diaries
     belongs_to :user

     default_scope { order(:id) }
end
