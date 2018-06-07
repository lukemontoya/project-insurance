exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agents').del()
    .then(function () {
      // Inserts seed entries
      return knex('agents').insert([

        { agent_name: 'Tyler Durden', agent_email: 'narrator@insurance.com', bio: 'Its only after we have lost everything that we are free to do anything..', IMG_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7eFKLnydYiHHPOX3B_MCHAcOu6IN76Hj3mnCoLiMuKz_6O7b", location: 'Downtown', home: true, car: true, life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Honest Abe Adams', agent_email: 'abe@insurance.com', bio: 'I used to sell snake oil, now I am working an honest trade ::wink::.', IMG_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2YJyPqygUzgUbEEgaySOqp-cE-8VqsmVa7fxWSoMVdxeH2qM", location: 'South Scottsdale', home: true, car: true, life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Snake Williams', agent_email: 'snake@insurance.com', bio: 'I used to make snake oil for Abe to sell, now I am working an honest trade ::wink::.', IMG_url: "https://images.pexels.com/photos/1125032/pexels-photo-1125032.jpeg?auto=compress&cs=tinysrgb&h=350", location: 'South Phoenix', home: true, car: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2", admin: true},
        { agent_name: 'Jeff Jefferson', agent_email: 'jeff@insurance.com', bio: 'I love making sure people have peace of mind.', IMG_url: "https://images.pexels.com/photos/936099/pexels-photo-936099.jpeg?auto=compress&cs=tinysrgb&h=350", location: 'Central Phoenix', car: true, life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Victor Mancini', agent_email: 'victor@insurance.com', bio: 'I know the ins and outs of staying away from insurance fraud.', IMG_url: "https://m.media-amazon.com/images/M/MV5BMTc2NTM3MzE5NF5BMl5BanBnXkFtZTcwMjg4NDMwNA@@._V1_UY317_CR4,0,214,317_AL_.jpg", location: 'Sun City', home: true, life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"},
        { agent_name: 'Kill Bill', agent_email: 'kill@insurance.com', bio: 'If you know a persons social security number and address then we can write up a life insurance policy!', IMG_url: "https://s3.amazonaws.com/q2insuranceproject/kill@insurance.com", location: 'Avondale', life: true, password: "$2a$10$/Go9Gfa/./5GpqvJBpu0XepQ4CnG7VEfeGN8QLI/WOnPXl.0L0/a2"}

      ]);
    });
};
