class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :bio, :profile_image, :email, :city, :state, :zipcode
  has_many :plants, through: :user_plant_tasks
end
