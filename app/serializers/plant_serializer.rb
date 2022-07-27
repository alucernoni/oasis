class PlantSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :scientific_name, :description, :care_and_conditions_overview, :difficulty_level
end
