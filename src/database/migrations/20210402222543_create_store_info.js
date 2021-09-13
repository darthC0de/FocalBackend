
exports.up = function(knex) {
    return knex.schema.createTable('store_info', function (table) {
        table.increments()

        table.string('store').notNullable();
        table.decimal('bknumber').notNullable();
        table.date('date').notNullable();
        table.string('hours_min').notNullable();

        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('store_info');
};