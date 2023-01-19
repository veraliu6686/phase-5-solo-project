class Pet < ApplicationRecord
     has_many :diaries
     has_many :users, through: :diaries
     belongs_to :user

     validates :name, :arrival_date, presence: true
     default_scope { order(:id) }

     def days_from_today
          date = Date.strptime(arrival_date, "%m/%d/%Y")
          days_in_between = (Date.today.to_date - date.to_date).to_i
          return days_in_between
     end
end
