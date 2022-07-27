class PlantTolerateSerializer < ActiveModel::Serializer
  attributes :id, :low_light, :indirect_light, :full_light, :drought, :overwatering
  has_one :plant
end
