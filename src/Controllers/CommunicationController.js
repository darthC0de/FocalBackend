const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const communicationQuestions = await connection('communication_questions')
            .join('users', 'users.id', '=', 'communication_questions.id_user')
            .select('communication_questions.*')

        return response.json(communicationQuestions)
    },

    async create(request, response) {
        const {
            communicationQuestion1, communicationQuestionObservation1,
            communicationQuestion2, communicationQuestionObservation2,
            communicationQuestion3, communicationQuestionObservation3,
            communicationQuestion4, communicationQuestionObservation4,
            communicationQuestion5, communicationQuestionObservation5,
        } = request.body;

        const id_user = request.headers.authorization;

        const [id] = await connection('communication_questions').insert({
            communicationQuestion1, communicationQuestionObservation1,
            communicationQuestion2, communicationQuestionObservation2,
            communicationQuestion3, communicationQuestionObservation3,
            communicationQuestion4, communicationQuestionObservation4,
            communicationQuestion5, communicationQuestionObservation5,
            id_user
        });

        return response.json({ id })
    }
}