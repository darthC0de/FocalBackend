const knex = require('knex');
const configuration = require('../../knexfile');
const connection = knex(configuration[process.env.NODE_ENV]);

describe("Simple test",()=>{
    beforeAll(async () => {
        await connection.migrate.latest();
    });
    
    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    })
    

    let x = 6
    
    it("simple test",()=>{
        expect(x).toBe(6)
        x = 8
        expect(x).toBe(8)
    })
})