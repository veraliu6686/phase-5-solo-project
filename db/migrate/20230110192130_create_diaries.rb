class CreateDiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :diaries do |t|
      t.string :date
      t.string :title
      t.text :content
      t.string :tag
      t.string :image
      t.integer :likes
      t.belongs_to :pet, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
