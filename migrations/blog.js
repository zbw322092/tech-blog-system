exports.up = (knex) => {
  return knex.schema
    .createTable('blog', (table) => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('emailAddress');
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTable('blog');
};