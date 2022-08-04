class PlantSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :scientific_name, :description, :care_and_conditions_overview, :plant_image_url, :difficulty_level, :watering_interval_days, :date_last_watered, :is_owned, :on_wishlist, :plant_nickname, :plant_wants, :plant_tolerates, :users
  has_many :plant_tolerates
  has_many :plant_wants
  has_many :users, through: :user_plant_tasks
end
