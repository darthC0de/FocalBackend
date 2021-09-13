
exports.up = function (knex) {
    return knex.schema.createTable('routine_management_questions', function (table) {
        table.increments();

        table.string('routineManagementQuestion1');
        table.string('routineManagementQuestionObservation1');
        table.string('routineManagementQuestion2');
        table.string('routineManagementQuestionObservation2');
        table.string('routineManagementQuestion3');
        table.string('routineManagementQuestionObservation3');
        table.string('routineManagementQuestion4');
        table.string('routineManagementQuestionObservation4');
        table.string('routineManagementQuestion5');
        table.string('routineManagementQuestionObservation5');
        table.string('routineManagementQuestion6');
        table.string('routineManagementQuestionObservation6');
        table.string('routineManagementQuestion7');
        table.string('routineManagementQuestionObservation7');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('routine_management_questions')
};
