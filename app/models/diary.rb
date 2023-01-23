class Diary < ApplicationRecord
    belongs_to :user
    belongs_to :pet
    # has_one_attached :image

    # def acceptable_image
    #     return unless image.attached?

    #     unless main_image.byte_size <= 1.megabyte
    #         errors.add(:image, "is too big")
    #     end

    #     acceptable_types = ["image/jpeg", "image/png"]
    #     unless acceptable_types.include?(main_image.content_type)
    #         errors.add(:image, "must be a JPEG or PNG")
    #     end
    # end
end
