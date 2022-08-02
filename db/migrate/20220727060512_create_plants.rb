class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :common_name
      t.string :scientific_name
      t.text :description
      t.text :care_and_conditions_overview
      t.string :plant_image_url
      t.integer :difficulty_level
      t.integer :watering_interval_days
      t.string :date_last_watered
      t.boolean :on_wishlist, default: false
      t.boolean :is_owned, default: false
      t.string :plant_nickname, default: "null"

      t.timestamps
    end
  end
end
