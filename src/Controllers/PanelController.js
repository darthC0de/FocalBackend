const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const id_user = request.headers.authorization;

        const store_info = await connection('store_info')
            .where('id_user', id_user)
            .select('*')

        return response.json(store_info)
    }
}