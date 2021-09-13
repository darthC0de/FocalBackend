const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const customerExQuestions = await connection('customer_experience_questions')
            .join('users', 'users.id', '=', 'customer_experience_questions.id_user')
            .select('customer_experience_questions.*')

        return response.json(customerExQuestions)
    },

    async create(request, response) {
        const {
            customerExQuestion1, customerExQuestionObservation1,
            customerExQuestion2, customerExQuestionObservation2,
            customerExQuestion3, customerExQuestionObservation3,
            customerExQuestion4, customerExQuestionObservation4,
            customerExQuestion5, customerExQuestionObservation5,
            customerExQuestion6, customerExQuestionObservation6,
            customerExQuestion7, customerExQuestionObservation7,
            customerExQuestion8, customerExQuestionObservation8,
            customerExQuestion9, customerExQuestionObservation9,
            customerExQuestion10, customerExQuestionObservation10,
            customerExQuestion11, customerExQuestionObservation11,
            customerExQuestion12, customerExQuestionObservation12,
        } = request.body;

        const id_user = request.headers.authorization

        const [id] = await connection('customer_experience_questions').insert({
            customerExQuestion1, customerExQuestionObservation1,
            customerExQuestion2, customerExQuestionObservation2,
            customerExQuestion3, customerExQuestionObservation3,
            customerExQuestion4, customerExQuestionObservation4,
            customerExQuestion5, customerExQuestionObservation5,
            customerExQuestion6, customerExQuestionObservation6,
            customerExQuestion7, customerExQuestionObservation7,
            customerExQuestion8, customerExQuestionObservation8,
            customerExQuestion9, customerExQuestionObservation9,
            customerExQuestion10, customerExQuestionObservation10,
            customerExQuestion11, customerExQuestionObservation11,
            customerExQuestion12, customerExQuestionObservation12,
            id_user
        })

        return response.json({ id })
    }
}