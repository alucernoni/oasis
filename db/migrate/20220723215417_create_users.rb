class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.text :bio
      t.string :profile_image
      t.string :email
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :password_digest

      t.timestamps
    end
  end
end
