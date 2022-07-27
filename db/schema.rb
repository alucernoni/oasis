# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_27_162152) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plant_tolerates", force: :cascade do |t|
    t.bigint "plant_id", null: false
    t.boolean "low_light", default: false
    t.boolean "indirect_light", default: true
    t.boolean "full_light", default: false
    t.boolean "drought", default: false
    t.boolean "overwatering", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["plant_id"], name: "index_plant_tolerates_on_plant_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "common_name"
    t.string "scientific_name"
    t.text "description"
    t.text "care_and_conditions_overview"
    t.integer "difficulty_level"
    t.boolean "on_wishlist", default: false
    t.boolean "is_owned", default: false
    t.string "plant_nickname", default: "null"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.text "bio"
    t.string "profile_image"
    t.string "email"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "plant_tolerates", "plants"
end
