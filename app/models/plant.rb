class Plant < ApplicationRecord
    has_many :plant_tolerates, dependent: :destroy
    has_many :plant_wants, dependent: :destroy
    has_many :user_plant_tasks, dependent: :destroy
    has_many :users, through: :user_plant_tasks
end
