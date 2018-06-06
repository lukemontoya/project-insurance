
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {client_name: 'Crash Carwrecks', client_email: 'crash@boom.com', date: '6-13-2018', client_comment: 'I need car insurance like whoa', agent_id: 1},
        {client_name: 'Grim Reaper', client_email: 'grim@dead.com', date: '6-8-2018', client_comment: 'Can I take out policies on other lives?', agent_id: 1},
        {client_name: 'Carlos Enfuego', client_email: 'burn@fire.com', date: '6-4-2018', client_comment: 'I need a home policy with a good fire clause because the urges are coming back', agent_id: 1}
      ]);
    });
};
