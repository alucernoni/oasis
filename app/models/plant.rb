class Plant < ApplicationRecord
    has_many :plant_tolerates, dependent: :destroy
end
