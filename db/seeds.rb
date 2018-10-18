# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create(first_name: 'Michael', last_name: 'Scott', email: 'mscott@dundermifflin.com', password: 'starwars');
demoTodoList1 = User.create(name: 'Plan Birthday Party', description: 'We\'re throwing a birthday party on Friday during lunch', user_id: 1);
demoTodoList2 = User.create(name: 'Plan Diversity Training', description: 'My diversity training seminar. (much better than Toby\'s)', user_id: 1);
