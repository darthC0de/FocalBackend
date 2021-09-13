const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const frameQuestions = await connection('frame_questions')
            .join('users', 'users.id', '=', 'frame_questions.id_user')
            .select('frame_questions.*')

        return response.json(frameQuestions)
    },

    async create(request, response) {
        const {
            frameQuestion1, frameQuestionObservation1,
            frameQuestion2, frameQuestionObservation2,
            frameQuestion3, frameQuestionObservation3,
            frameQuestion4, frameQuestionObservation4,
        } = request.body;

        const id_user = request.headers.authorization

        const [id] = await connection('frame_questions').insert({
            frameQuestion1, frameQuestionObservation1,
            frameQuestion2, frameQuestionObservation2,
            frameQuestion3, frameQuestionObservation3,
            frameQuestion4, frameQuestionObservation4,
            id_user
        });

        return response.json ({ id })
    }
}