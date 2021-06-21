const request = require('supertest')
const app = require('../../src/routes/characterRoute')
describe('Character Controller sucess', () => {

    const myCharacter = {
        id: 1011334
    }

    it('Call listAll method should shows all characters', async () => {
        const res = await request(app).get("/v1/public/characters")

        expect(res.status).toBe(200)
    })
})