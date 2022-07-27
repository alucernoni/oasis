class CreatePlantTolerates < ActiveRecord::Migration[7.0]
  def change
    create_table :plant_tolerates do |t|
      t.references :plant, null: false, foreign_key: true
      t.boolean :low_light, default: false
      t.boolean :indirect_light, default: true
      t.boolean :full_light, default: false
      t.boolean :drought, default: false
      t.boolean :overwatering, default: false

      t.timestamps
    end
  end
end
