# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Resetting seeds..."

User.destroy_all
User.reset_pk_sequence

puts "Starting seeding..."

Annemarie = User.create(
    first_name: "Annemarie",
    last_name: "Lucernoni",
    username: "gardenghost81",
    bio: "Some lucky people were born with a green thumb...mine must be black",
    profile_image: Faker::Placeholdit.image, 
    email: "a.lucernoni0@gmail.com",
    city: "Seattle",
    state: "Washington",
    zipcode: 98105,
    password: "Gardenlass1!"
)

Caroline = User.create(
    first_name: "Caroline",
    last_name: "Lucernoni",
    username: "gardenguru",
    bio: "I can't believe you're pro, I'm so much better at gardening than you",
    profile_image: Faker::Placeholdit.image, 
    email: "fakeemail@email.com",
    city: "Lakewood",
    state: "Colorado",
    zipcode: 80215,
    password: "Greenthumb1!"
)

Josie = User.create(
    first_name: "Josie",
    last_name: "Lucernoni",
    username: "plantnewb",
    bio: "I can't keep a cactus alive",
    profile_image: Faker::Placeholdit.image, 
    email: "fakeemail2@email.com",
    city: "Falls Church",
    state: "Virginia",
    zipcode: 22046,
    password: "Dogmama1!"
)

puts "Seeding done!"