class User < ApplicationRecord
    has_many :user_plant_tasks
    has_many :plants, through: :user_plant_tasks

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 8}

    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number

    def password_uppercase
        return if !!password.match(/\p{Upper}/)
        errors.add :password, ' must contain at least 1 uppercase '
    end
    
    def password_lower_case
        return if !!password.match(/\p{Lower}/)
        errors.add :password, ' must contain at least 1 lowercase '
    end
    
    def password_special_char
        special = "?<>',?[]}{=-)(*&^%$#`~{}!"
        regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
        return if password =~ regex
        errors.add :password, ' must contain special character'
    end
    
    def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, ' must contain at least one number'
    end

    def add_plants(arr_of_plant_ids)
        arr_of_plant_ids.each do |id|
            UserPlantTask.find_or_create_by(
                user_id: self.id,
                plant_id: id
            )
        end
    end

end
