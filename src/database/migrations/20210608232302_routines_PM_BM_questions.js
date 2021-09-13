
exports.up = function (knex) {
    return knex.schema.createTable('routines_PM_BM_questions', function (table) {
        table.increments();

        table.string('routinesPmBmQuestion1');
        table.string('routinesPmBmQuestionObservation1');
        table.string('routinesPmBmQuestion2');
        table.string('routinesPmBmQuestionObservation2');
        table.string('routinesPmBmQuestion3');
        table.string('routinesPmBmQuestionObservation3');
        table.string('routinesPmBmQuestion4');
        table.string('routinesPmBmQuestionObservation4');
        table.string('routinesPmBmQuestion5');
        table.string('routinesPmBmQuestionObservation5');
        table.string('routinesPmBmQuestion6');
        table.string('routinesPmBmQuestionObservation6');
        table.string('routinesPmBmQuestion7');
        table.string('routinesPmBmQuestionObservation7');
        table.string('routinesPmBmQuestion8');
        table.string('routinesPmBmQuestionObservation8');
        table.string('routinesPmBmQuestion9');
        table.string('routinesPmBmQuestionObservation9');
        table.string('routinesPmBmQuestion10');
        table.string('routinesPmBmQuestionObservation10');
        table.string('routinesPmBmQuestion11');
        table.string('routinesPmBmQuestionObservation11');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('routines_PM_BM_questions')
};
