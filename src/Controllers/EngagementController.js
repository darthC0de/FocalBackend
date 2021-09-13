const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const engagementQuestions = await connection('engagement_questions')
            .join('users', 'users.id', '=', 'engagement_questions.id_user')
            .select('engagement_questions.*')

        return response.json(engagementQuestions)
    },

    async create(request, response) {
        const {
            engagementQuestion1, engagementQuestionObservation1,
            engagementQuestion2, engagementQuestionObservation2,
            engagementQuestion3, engagementQuestionObservation3,
            engagementQuestion4, engagementQuestionObservation4,
        } = request.body;

        const id_user = request.headers.authorization

        const [id] = await connection('engagement_questions').insert({
            engagementQuestion1, engagementQuestionObservation1,
            engagementQuestion2, engagementQuestionObservation2,
            engagementQuestion3, engagementQuestionObservation3,
            engagementQuestion4, engagementQuestionObservation4,
            id_user
        });

        return response.json({ id })
    }
}