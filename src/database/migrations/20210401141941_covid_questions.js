
exports.up = function(knex) {
    return knex.schema.createTable('questions_covid', function(table) {
        table.increments()

        table.string('questionCovid1');
        table.string('questionCovidObservation1');
        table.string('questionCovid2');
        table.string('questionCovidObservation2');
        table.string('questionCovid3');
        table.string('questionCovidObservation3');
        table.string('questionCovid4');
        table.string('questionCovidObservation4');
        table.string('questionCovid5');
        table.string('questionCovidObservation5');
        table.string('questionCovid6');
        table.string('questionCovidObservation6');
        table.string('questionCovid7');
        table.string('questionCovidObservation7');
        table.string('questionCovid8');
        table.string('questionCovidObservation8');
        table.string('questionCovid9');
        table.string('questionCovidObservation9');
    
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions_covid')
};
