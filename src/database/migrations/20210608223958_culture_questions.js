
exports.up = function (knex) {
    return knex.schema.createTable('culture_questions', function (table) {
        table.increments();

        table.string('cultureQuestion1');
        table.string('cultureQuestionObservation1');
        table.string('cultureQuestion2');
        table.string('cultureQuestionObservation2');
        table.string('cultureQuestion3');
        table.string('cultureQuestionObservation3');
        table.string('cultureQuestion4');
        table.string('cultureQuestionObservation4');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('culture_questions')
};
