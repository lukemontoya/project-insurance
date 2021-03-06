
exports.up = function(knex, Promise) {
  return knex.schema.createTable("agents",(table)=>{
    table.increments();
    table.string("agent_name");
    table.string("agent_email").unique();
    table.text("bio");
    table.text("IMG_url");
    table.text("location");
    table.boolean("home").defaultTo("false");
    table.boolean("car").defaultTo("false");
    table.boolean("life").defaultTo("false");
    table.string("password");
    table.boolean("admin").defaultTo("false");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("agents");

};
