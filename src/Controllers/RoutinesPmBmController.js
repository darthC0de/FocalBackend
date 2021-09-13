const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const routinesPmBmQuestions = await connection('routines_PM_BM_questions')
            .join('users', 'users.id', '=', 'routines_PM_BM_questions.id_user')
            .select('routines_PM_BM_questions.*')

        return response.json(routinesPmBmQuestions)
    },

    async create(request, response) {
        const {
            routinesPmBmQuestion1, routinesPmBmQuestionObservation1,
            routinesPmBmQuestion2, routinesPmBmQuestionObservation2,
            routinesPmBmQuestion3, routinesPmBmQuestionObservation3,
            routinesPmBmQuestion4, routinesPmBmQuestionObservation4,
            routinesPmBmQuestion5, routinesPmBmQuestionObservation5,
            routinesPmBmQuestion6, routinesPmBmQuestionObservation6,
            routinesPmBmQuestion7, routinesPmBmQuestionObservation7,
            routinesPmBmQuestion8, routinesPmBmQuestionObservation8,
            routinesPmBmQuestion9, routinesPmBmQuestionObservation9,
            routinesPmBmQuestion10, routinesPmBmQuestionObservation10,
            routinesPmBmQuestion11, routinesPmBmQuestionObservation11,
        } = request.body

        const id_user = request.headers.authorization

        const [id] = await connection('routines_PM_BM_questions').insert({
            routinesPmBmQuestion1, routinesPmBmQuestionObservation1,
            routinesPmBmQuestion2, routinesPmBmQuestionObservation2,
            routinesPmBmQuestion3, routinesPmBmQuestionObservation3,
            routinesPmBmQuestion4, routinesPmBmQuestionObservation4,
            routinesPmBmQuestion5, routinesPmBmQuestionObservation5,
            routinesPmBmQuestion6, routinesPmBmQuestionObservation6,
            routinesPmBmQuestion7, routinesPmBmQuestionObservation7,
            routinesPmBmQuestion8, routinesPmBmQuestionObservation8,
            routinesPmBmQuestion9, routinesPmBmQuestionObservation9,
            routinesPmBmQuestion10, routinesPmBmQuestionObservation10,
            routinesPmBmQuestion11, routinesPmBmQuestionObservation11,
            id_user
        });

        return response.json({ id })
    }
}