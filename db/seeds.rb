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

Plant.destroy_all
Plant.reset_pk_sequence

PlantTolerate.destroy_all
PlantTolerate.reset_pk_sequence

UserPlantTask.destroy_all
UserPlantTask.reset_pk_sequence

puts "Seeding users..."

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

puts "Seedings plants..."

snake_plant = Plant.create(common_name: "Snake Plant", scientific_name: "Dracaena trifasciata", description: "Snake Plant can be recognized by its evergreen sword-shaped leaves that grow upright and almost resemble artificial foliage. Snake plants are often used as home decor since they're pleasing to the eye, are easy to care for, are good air purifiers, and require little water to survive.", care_and_conditions_overview: "Snake plants are very tolerant of unideal conditions and care. They prefer indirect sunlight (i.e. not directly in a window), but can tolerate both direct light and shade. They like to dry out between waterings and can tolerate droughts / neglect of several weeks while still looking decent.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "1")
zz_plant = Plant.create(common_name: "ZZ Plant", scientific_name: "Zamioculcas zamiifolia", description: "The ZZ plant is an easy to grow and care for indoor plant that displays small glossy leaves on stems which can grow up to 3 ft long indoors. In a NASA study, researchers found it is specifically adept at removing copious amounts of toxins such as xylene, toluene, and benzene from the air.", care_and_conditions_overview: "ZZ plants are very tolerant and well-suited to the forgetful gardener, sometimes described as 'virtually indestructible'. They grow well in low or bright lighting conditions and, similar to a cacti, prefer infrequent waterings and do best when mostly ignored", plant_image_url: Faker::Placeholdit.image, difficulty_level: "1")
pothos = Plant.create(common_name: "Pothos", scientific_name: "Epipremnum aureum", description: "Pothos is an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant, and is favored as one of the easiest plants to grow and as a good air purifier. Note that it can be toxic to pets if consumed.", care_and_conditions_overview: "Pothos thrives anywhere from bright indirect light to low light (if it is a variegated version with white streaks, it will do better with more light), and tolerates neglect, loving nutrient-deficient soil. It can be grown in a jug of water or regular soil, and is a good choice for rooms like a bathroom which may be lower in light and higher in humidity.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")
peace_lily = Plant.create(common_name: "Peace Lily", scientific_name: "Spathiphyllum", description: "Peace Lily' is a herbaceous perennial (not a true lily) with over 40 varieties, typically grown as a houseplant. They are sturdy, easy to grow plants with glossy, dark green oval leaves that rise directly from the soil and narrow to a point. They periodically produce long-lasting, lightly fragrant white flowers that turn a pale green as they age. Note that peace lilies can be mildly toxic to pets if consumed.", care_and_conditions_overview: "Peace lilies are a good choice for low light areas of the house, and are very drought-tolerant. Many gardeners choose only to water them once they droop as they prefer drought conditions. The main way to kill a Peace Lily is with over-watering.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")
pilea = Plant.create(common_name: "Pilea or Chinese Money Plant", scientific_name: "Pilea peperomioides", description: "Pilea plants are known for their bright green, coin-shaped leaves. At maturity, the plant reaches about 12 inches tall with an equal width; be sure it has plenty of space to grow and develop new leaves. If Pilea is happy, it may produce small white flowers on pink-tinged stems.", care_and_conditions_overview: "Pilea grows well in dry conditions, likes indirect light but can adapt to low light areas, and are fast-growing, making them low-maintenance and great for beginner plant owners. They like to dry out between waterings.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "1")
monstera_deliciosa = Plant.create(common_name: "Split-Leaf Philodendron or Swiss Cheese Plant", scientific_name: "Monstera deliciosa", description: "Monstera deliciosa is a climbing, evergreen perennial vine and common houseplant known for its showy, glossy, perforated leaves slashed to the margins and long cord-like aerial roots.", care_and_conditions_overview: "The Swiss Cheese plant prefers full sun but will adapt to partial sun/shade. It prefers moist, well-drained soil and high humidity, making it a good choice as a bathroom plant and for chronic over-waterers. It grows well in a basket as a trailing plant or in a pot with a moss pole to climb up.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")
spider_plant = Plant.create(common_name: "Spider Plant", scientific_name: "Chlorophytum comosum", description: "Spider Plant is an evergreen, perennial plant with a tufted appearance. At height and diameter it does not exceed 50 cm and is popular for its low-maintenance nature and the way it spawns baby spider plants (spiderettes). Note that while not toxic to pets, if consumed it can have a mildly hallucinogenic effect on cats similar to catnip.", care_and_conditions_overview: "Spider plant is considered ony of the most adaptable and easiest to grow houseplants, as it tolerates a wide range of conditions. Ideally, they prefer bright indirect light and to dry out between waterings. They like to be root-bound and should not be repotted until their roots are very visible and watering becomes difficult.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "1")
corn_plant = Plant.create(common_name: "Corn Plant", scientific_name: "Dracaena fragrans", description: "Corns plants are a slow growing shrub, usually multistemmed at the base with thick brown stems and green leaves (often with a yellow stripe down the center). It is a durable houseplant, popular for its beauty and easy-growing habit.", care_and_conditions_overview: "A favorite of novice gardeners, the Corn Plant grows happily in a variety of conditions with minimal attention. It prefers slightly cooler temperatures, and while it can tolerate full sun, it is happiest in light shade or indirect light. It also prefers its soil slightly moist, and while slightly dry is better than soggy, it doesn't like to dry out completely, making it relatively friendly to over-waterers.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")
jade_plant = Plant.create(common_name: "Jade Plant", scientific_name: "Crassula ovata", description: "A branched, succulent shrub commonly grown indoors, jade plant features thick, woody stems and glossy green, fleshy, oblong leaves up to two inches long. Happily, this low-maintenance plant lives a long time, taking on the appearance of a miniature tree as it ages.", care_and_conditions_overview: "Jade plant prefers infrequent, deep watering sessions every couple weeks (could be two weeks to a month, don't water before top inch of soil is dry). Jade performs best in full sun and may start looking leggy in lower light conditions.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")
flamingo_plant = Plant.create(common_name: "Flamingo Lily or Flamingo Flower Plant", scientific_name: "Anthurium andraeanum", description: "Flamingo Flower Plant is a herbaceous evergreen plant with dark green, glossy, heart-shaped leaves. It is complemented by a continuous display of bright, waxy, red or pink heart-shaped spathes with yellow spadices.", care_and_conditions_overview: "Flamingo Flower plants grow best in bright indirect light, and while they can tolerate lower light, they do not like full sun. A soil mix (50/50) of potting soil and perlite or well-draining orchid soil would be ideal, but it is fine in regular soil as well. This plant likes regular watering, once soil is dry to the touch. If it dries out completely, soak the pot in a dish of water for an hour to re-hydrate the root ball, and do not overwater.", plant_image_url: Faker::Placeholdit.image, difficulty_level: "2")

puts "Seeding plant tolerances..."

snake_plant_tolerance = PlantTolerate.create(plant: snake_plant, low_light: true, indirect_light: true, full_light: true, drought: true, overwatering: false)
zz_plant_tolerance = PlantTolerate.create(plant: zz_plant, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: false)
pothos_tolerance = PlantTolerate.create(plant: pothos, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: true)
peace_lily_tolerance = PlantTolerate.create(plant: peace_lily, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: false)
pilea_tolerance = PlantTolerate.create(plant: pilea, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: false)
monstera_deliciosa_tolerance = PlantTolerate.create(plant: monstera_deliciosa, low_light: false, indirect_light: true, full_light: true, drought: false, overwatering: true)
spider_plant_tolerance = PlantTolerate.create(plant: spider_plant, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: false)
corn_plant_tolerance = PlantTolerate.create(plant: corn_plant, low_light: true, indirect_light: true, full_light: false, drought: false, overwatering: true)
jade_plant_tolerance = PlantTolerate.create(plant: jade_plant, low_light: false, indirect_light: true, full_light: true, drought: true, overwatering: true)
flamingo_plant_tolerance = PlantTolerate.create(plant: flamingo_plant, low_light: true, indirect_light: true, full_light: false, drought: true, overwatering: false)

puts "Seeding user_plant joiner..."

annemarie_plants = User.find(1).add_plants([1, 2, 3, 5, 8, 9, 10])
caroline_plants = User.find(2).add_plants([3, 4, 6, 7, 9,])
josie_plants = User.find(3).add_plants([1, 3, 4, 7])

puts "Seeding done!"