
exports.up = function (knex) {
    return knex.schema.createTable('customer_experience_questions', function (table) {
        table.increments();

        table.string('customerExQuestion1');
        table.string('customerExQuestionObservation1');
        table.string('customerExQuestion2');
        table.string('customerExQuestionObservation2');
        table.string('customerExQuestion3');
        table.string('customerExQuestionObservation3');
        table.string('customerExQuestion4');
        table.string('customerExQuestionObservation4');
        table.string('customerExQuestion5');
        table.string('customerExQuestionObservation5');
        table.string('customerExQuestion6');
        table.string('customerExQuestionObservation6');
        table.string('customerExQuestion7');
        table.string('customerExQuestionObservation7');
        table.string('customerExQuestion8');
        table.string('customerExQuestionObservation8');
        table.string('customerExQuestion9');
        table.string('customerExQuestionObservation9');
        table.string('customerExQuestion10');
        table.string('customerExQuestionObservation10');
        table.string('customerExQuestion11');
        table.string('customerExQuestionObservation11');
        table.string('customerExQuestion12');
        table.string('customerExQuestionObservation12');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('customer_experience_questions')
};
