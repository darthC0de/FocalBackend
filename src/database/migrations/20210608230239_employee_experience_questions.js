
exports.up = function (knex) {
    return knex.schema.createTable('employee_experience_questions', function (table) {
        table.string('employeeExQuestion1');
        table.string('employeeExQuestionObservation1');
        table.string('employeeExQuestion2');
        table.string('employeeExQuestionObservation2');
        table.string('employeeExQuestion3');
        table.string('employeeExQuestionObservation3');
        table.string('employeeExQuestion4');
        table.string('employeeExQuestionObservation4');
        table.string('employeeExQuestion5');
        table.string('employeeExQuestionObservation5');
        table.string('employeeExQuestion6');
        table.string('employeeExQuestionObservation6');
        table.string('employeeExQuestion7');
        table.string('employeeExQuestionObservation7');
        table.string('employeeExQuestion8');
        table.string('employeeExQuestionObservation8');
        table.string('employeeExQuestion9');
        table.string('employeeExQuestionObservation9');
        table.string('employeeExQuestion10');
        table.string('employeeExQuestionObservation10');
        table.string('employeeExQuestion11');
        table.string('employeeExQuestionObservation11');
        table.string('employeeExQuestion12');
        table.string('employeeExQuestionObservation12');
        table.string('employeeExQuestion13');
        table.string('employeeExQuestionObservation13');
        table.string('employeeExQuestion14');
        table.string('employeeExQuestionObservation14');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('employee_experience_questions')
};
