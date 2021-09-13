const connection = require('../database/connection')


module.exports = {
    async index(request, response) {

        const questions_covid = await connection('questions_covid')
            .join('users', 'users.id', '=', 'questions_covid.id_user')
            .select('questions_covid.*')

        return response.json(questions_covid)
    },

    async create(request, response) {
        const {
            questionCovid1, questionCovidObservation1,
            questionCovid2, questionCovidObservation2,
            questionCovid3, questionCovidObservation3,
            questionCovid4, questionCovidObservation4,
            questionCovid5, questionCovidObservation5,
            questionCovid6, questionCovidObservation6,
            questionCovid7, questionCovidObservation7,
            questionCovid8, questionCovidObservation8,
            questionCovid9, questionCovidObservation9,
        } = request.body;

        const id_user = request.headers.authorization;

        const [id] = await connection('questions_covid').insert({
            questionCovid1, questionCovidObservation1,
            questionCovid2, questionCovidObservation2,
            questionCovid3, questionCovidObservation3,
            questionCovid4, questionCovidObservation4,
            questionCovid5, questionCovidObservation5,
            questionCovid6, questionCovidObservation6,
            questionCovid7, questionCovidObservation7,
            questionCovid8, questionCovidObservation8,
            questionCovid9, questionCovidObservation9,
            id_user
        });

        return response.json({ id })
    }
}