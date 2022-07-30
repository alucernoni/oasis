class PlantSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :difficulty_level
  has_many :plant_tolerates
  has_many :users, through: :user_plant_tasks
end
