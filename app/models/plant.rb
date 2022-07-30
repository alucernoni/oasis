class Plant < ApplicationRecord
    has_many :plant_tolerates, dependent: :destroy
    has_many :user_plant_tasks
    has_many :users, through: :user_plant_tasks
end
