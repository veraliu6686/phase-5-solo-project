# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts "seeding start❗"

# puts "creating user"
# u1 = User.create(username: "", avatar: Faker::Avatar.image, email: "", password: "")

# puts "creating pets"
# p1 = Pet.create(name: Faker::Name.first_name, gender: "female", sterilized: false, arrival_date: Faker::Date.between(from: 2.years.ago, to: Date.today), weight: "1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU", user_id: u1.id)
# p2 = Pet.create(name: Faker::Name.first_name, gender: "male", sterilized: false, arrival_date: Faker::Date.between(from: 2.years.ago, to: Date.today), weight: "3kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i8PcXrQJ22vgZCA0pMMCzjKIBwD8bxXA3Q&usqp=CAU", user_id: u1.id)
# p3 = Pet.create(name: Faker::Name.first_name, gender: "female", sterilized: false, arrival_date: Faker::Date.between(from: 2.years.ago, to: Date.today), weight: ".5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXuhuTwE7A1DqbPx5VfzdXdpqKWlV9WNxOg&usqp=CAU", user_id: u1.id)
# p4 = Pet.create(name: Faker::Name.first_name, gender: "male", sterilized: false, arrival_date: Faker::Date.between(from: 2.years.ago, to: Date.today), weight: "5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1pIWPuVQbDKMxyc29QLWy1IlLPGPNPwOAg&usqp=CAU", user_id: u1.id)

# puts "creating diaries"
# Diary.create(date: "011023", title: Faker::Book.title, content: Faker::Quote.matz, tag: "daily", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJXZBaJbPahX5qzTHa0P9b9gZMK8Z-S_ihQ&usqp=CAU", likes: 134, pet_id: p1.id, user_id: u1.id )
# Diary.create(date: "011023", title: Faker::Book.title, content: Faker::Quote.matz, tag: "trip", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mhiJnP_FI7oDSHmcHqDUOa8iGU0NfeHG_w&usqp=CAU", likes: 52, pet_id: p2.id, user_id: u1.id )
# Diary.create(date: "011023", title: Faker::Book.title, content: Faker::Quote.matz, tag: "daily", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwS-4WITrzgvxTMOMaPfhU4LstYubBXwQsg&usqp=CAU", likes: 163, pet_id: p3.id, user_id: u1.id )
# Diary.create(date: "011023", title: Faker::Book.title, content: Faker::Quote.matz, tag: "tips", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJS7cdXtZzUhdJu79NyLZgL0hUIh8W55E_g&usqp=CAU", likes: 64, pet_id: p4.id, user_id: u1.id )

# puts "seeding done✅"
