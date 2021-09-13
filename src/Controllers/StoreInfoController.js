const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const storeInfo = await connection('store_info')
            .join('users', 'users.id', '=', 'store_info.id_user')
            .select('store_info.*')

        return response.json(storeInfo);
    },

    async create(request, response) {
        const { store, bknumber, date, hours_min } = request.body;

        const id_user = request.headers.authorization;

        const [id] = await connection('store_info').insert({
            store,
            bknumber,
            date,
            hours_min,
            id_user
        });

        return response.json({ id })
    }
}