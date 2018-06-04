
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments",(table)=>{
    table.increments();
    table.text("agent_comments");
    table.integer("appt_id")
      .notNullable()
      .references('id')
      .inTable('appointments')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments");

};
