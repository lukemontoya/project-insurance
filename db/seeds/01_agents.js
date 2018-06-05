exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agents').del()
    .then(function () {
      // Inserts seed entries
      return knex('agents').insert([

        { agent_name: 'Abe Adams', agent_email: 'abe@insurance.com', bio: 'I used to sell snake oil, now I am working an honest trade ::wink::.', IMG_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2YJyPqygUzgUbEEgaySOqp-cE-8VqsmVa7fxWSoMVdxeH2qM", location: 'South Scottsdale', password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Snake Williams', agent_email: 'snake@insurance.com', bio: 'I used to make snake oil for Abe to sell, now I am working an honest trade ::wink::.', IMG_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBrI-4zmJCR53lUrtmV7WRznpZQKXOXOyd91AbvHixFqbxyaS", location: 'South Phoenix', home: true, car: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Jeff Jefferson', agent_email: 'jeff@insurance.com', bio: 'I love making sure people have peace of mind.', IMG_url: "https://images.pexels.com/photos/936099/pexels-photo-936099.jpeg?auto=compress&cs=tinysrgb&h=350", location: 'Central Phoenix', car: true, life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"}

      ]);
    });
};
