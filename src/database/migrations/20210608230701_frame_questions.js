
exports.up = function (knex) {
    return knex.schema.createTable('frame_questions', function (table) {
        table.increments();

        table.string('frameQuestion1');
        table.string('frameQuestionObservation1');
        table.string('frameQuestion2');
        table.string('frameQuestionObservation2');
        table.string('frameQuestion3');
        table.string('frameQuestionObservation3');
        table.string('frameQuestion4');
        table.string('frameQuestionObservation4');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('frame_questions')
};
