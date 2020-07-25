
exports.up = function(knex) {
    return knex.schema.createTable('category', function(table){
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('telephone').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('imageCategory');
    });
};

exports.down = function(knex) {
    
};
