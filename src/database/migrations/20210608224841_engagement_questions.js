
exports.up = function (knex) {
    return knex.schema.createTable('engagement_questions', function (table) {
        table.increments();

        table.string('engagementQuestion1');
        table.string('engagementQuestionObservation1');
        table.string('engagementQuestion2');
        table.string('engagementQuestionObservation2');
        table.string('engagementQuestion3');
        table.string('engagementQuestionObservation3');
        table.string('engagementQuestion4');
        table.string('engagementQuestionObservation4');
        
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('engagement_questions')
};
