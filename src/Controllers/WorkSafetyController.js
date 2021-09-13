const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const workSafetyQuestions = await connection('work_safety_questions')
            .join('users', 'users.id', '=', 'work_safety_questions.id_user')
            .select('work_safety_questions.*')

        return response.json(workSafetyQuestions)
    },

    async create(request, response) {
        const {
            workSafetyQuestion1, workSafetyQuestionObservation1,
            workSafetyQuestion2, workSafetyQuestionObservation2,
            workSafetyQuestion3, workSafetyQuestionObservation3,
            workSafetyQuestion4, workSafetyQuestionObservation4,
            workSafetyQuestion5, workSafetyQuestionObservation5,
            workSafetyQuestion6, workSafetyQuestionObservation6,
            workSafetyQuestion7, workSafetyQuestionObservation7,
            workSafetyQuestion8, workSafetyQuestionObservation8,
            workSafetyQuestion9, workSafetyQuestionObservation9,
            workSafetyQuestion10, workSafetyQuestionObservation10,
        } = request.body

        const id_user = request.headers.authorization

        const [id] = await connection('work_safety_questions').insert({
            workSafetyQuestion1, workSafetyQuestionObservation1,
            workSafetyQuestion2, workSafetyQuestionObservation2,
            workSafetyQuestion3, workSafetyQuestionObservation3,
            workSafetyQuestion4, workSafetyQuestionObservation4,
            workSafetyQuestion5, workSafetyQuestionObservation5,
            workSafetyQuestion6, workSafetyQuestionObservation6,
            workSafetyQuestion7, workSafetyQuestionObservation7,
            workSafetyQuestion8, workSafetyQuestionObservation8,
            workSafetyQuestion9, workSafetyQuestionObservation9,
            workSafetyQuestion10, workSafetyQuestionObservation10,
            id_user
        });

        return response.json({ id })
    }
}