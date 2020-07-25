
exports.up = function(knex) {
    return knex.schema.createTable('users_employee', function(table){
        table.string('id').unique();
        table.string('name').notNullable();
        table.string('username').primary();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.decimal('telephone').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('description').notNullable();
        table.string('imageEmployee');
        table.string('imageUser');
        table.string('typeuser').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_employee');
};
