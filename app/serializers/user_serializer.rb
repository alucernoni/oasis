class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :bio, :profile_image, :email, :city, :state, :zipcode
end
