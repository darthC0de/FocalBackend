const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const cultureQuestions = await connection('culture_questions')
            .join('users', 'users.id', '=', 'culture_questions.id_user')
            .select('culture_questions.*')

        return response.json(cultureQuestions)
    },

    async create(request, response) {
        const {
            cultureQuestion1, cultureQuestionObservation1,
            cultureQuestion2, cultureQuestionObservation2,
            cultureQuestion3, cultureQuestionObservation3,
            cultureQuestion4, cultureQuestionObservation4,
        } = request.body;

        const id_user = request.headers.authorization

        const [id] = await connection('culture_questions').insert({
            cultureQuestion1, cultureQuestionObservation1,
            cultureQuestion2, cultureQuestionObservation2,
            cultureQuestion3, cultureQuestionObservation3,
            cultureQuestion4, cultureQuestionObservation4,
            id_user
        });

        return response.json({ id })
    }
}