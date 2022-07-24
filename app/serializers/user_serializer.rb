class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :bio, :profile_image, :email, :mobile_phone, :city, :state, :zipcode
end
