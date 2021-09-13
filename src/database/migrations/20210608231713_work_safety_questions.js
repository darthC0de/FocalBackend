
exports.up = function (knex) {
    return knex.schema.createTable('work_safety_questions', function (table) {
        table.increments();

        table.string('workSafetyQuestion1');
        table.string('workSafetyQuestionObservation1');
        table.string('workSafetyQuestion2');
        table.string('workSafetyQuestionObservation2');
        table.string('workSafetyQuestion3');
        table.string('workSafetyQuestionObservation3');
        table.string('workSafetyQuestion4');
        table.string('workSafetyQuestionObservation4');
        table.string('workSafetyQuestion5');
        table.string('workSafetyQuestionObservation5');
        table.string('workSafetyQuestion6');
        table.string('workSafetyQuestionObservation6');
        table.string('workSafetyQuestion7');
        table.string('workSafetyQuestionObservation7');
        table.string('workSafetyQuestion8');
        table.string('workSafetyQuestionObservation8');
        table.string('workSafetyQuestion9');
        table.string('workSafetyQuestionObservation9');
        table.string('workSafetyQuestion10');
        table.string('workSafetyQuestionObservation10');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('work_safety_questions')
};
