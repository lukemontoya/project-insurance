
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {client_name: 'Crash Carwrecks', client_email: 'crash@boom.com', date: '6-13-2018', client_comment: 'I need car insurance like whoa', agent_id: 1},
        {client_name: 'Grim Reaper', client_email: 'grim@dead.com', date: '6-8-2018', client_comment: 'Can I take out policies on other lives?', status: 'confirmed', agent_id: 1},
        {client_name: 'Carlos Enfuego', client_email: 'burn@fire.com', date: '6-4-2018', client_comment: 'I need a home policy with a good fire clause because the urges are coming back',  status: 'completed', agent_id: 1},
        {client_name: 'Miss Fritter', client_email: 'burn@fire.com', date: '6-4-2018', client_comment: 'I am about to commit a moving violation!',  status: 'unconfirmed', agent_id: 2},
        {client_name: 'Robert Paulson', client_email: 'robert@paulson.com', date: '6-4-2018', client_comment: 'Second rule is...you do not talk about it. hee hee',  status: 'confirmed', agent_id: 2},
        {client_name: 'Moana', client_email: 'moana@island.com', date: '6-8-2018', client_comment: 'I have crossed the horizen to find you',  status: 'unconfirmed', agent_id: 3},
        {client_name: 'Butch Coolidge', client_email: 'butch@watch.com', date: '6-19-2018', client_comment: 'It is a chopper, baby.',  status: 'confirmed', agent_id: 3}
      ]);
    });
};
