class CreatePlantWants < ActiveRecord::Migration[7.0]
  def change
    create_table :plant_wants do |t|
      t.references :plant, null: false, foreign_key: true
      t.string :ideal_water_frequency
      t.string :ideal_light_level
      t.string :ideal_food_frequency

      t.timestamps
    end
  end
end
