
exports.up = function (knex) {
    return knex.schema.createTable('communication_questions', function (table) {
        table.increments()

        table.string('communicationQuestion1');
        table.string('communicationQuestionObservation1');
        table.string('communicationQuestion2');
        table.string('communicationQuestionObservation2');
        table.string('communicationQuestion3');
        table.string('communicationQuestionObservation3');
        table.string('communicationQuestion4');
        table.string('communicationQuestionObservation4');
        table.string('communicationQuestion5');
        table.string('communicationQuestionObservation5');

        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('communication_questions')
};
