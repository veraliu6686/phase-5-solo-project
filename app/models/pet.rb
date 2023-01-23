class Pet < ApplicationRecord
     has_many :diaries, dependent: :destroy
     has_many :users, through: :diaries
     has_many :todo, dependent: :destroy
     belongs_to :user
     # has_one_attached :image

     validates :name, :arrival_date, presence: true
     # validate :acceptable_image
     default_scope { order(:id) }

     def days_from_today
          date = Date.strptime(arrival_date, "%m/%d/%Y")
          days_in_between = (Date.today.to_date - date.to_date).to_i
          return days_in_between
     end

#     def acceptable_image
#         return unless image.attached?

#         unless main_image.byte_size <= 1.megabyte
#             errors.add(:image, "is too big")
#         end

#         acceptable_types = ["image/jpeg", "image/png"]
#         unless acceptable_types.include?(main_image.content_type)
#             errors.add(:image, "must be a JPEG or PNG")
#         end
#     end

end
