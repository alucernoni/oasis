class PlantWantSerializer < ActiveModel::Serializer
  attributes :id, :ideal_water_frequency, :ideal_light_level, :ideal_food_frequency, :plant_id
  has_one :plant
end
