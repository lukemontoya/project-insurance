
exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointments",(table)=>{
    table.increments();
    table.string("client_name");
    table.string("client_email");
    table.text("date");
    table.text("client_comment");
    table.boolean("home").defaultTo("false");
    table.boolean("car").defaultTo("false");
    table.boolean("life").defaultTo("false");
    table.text("status").defaultTo("unconfirmed");
    table.integer("agent_id")
      .notNullable()
      .references('id')
      .inTable('agents')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appointments");

};
