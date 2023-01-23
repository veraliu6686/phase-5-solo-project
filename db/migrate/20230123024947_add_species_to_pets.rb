class AddSpeciesToPets < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :species, :string
  end
end
