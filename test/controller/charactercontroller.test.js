const request = require('supertest')
const app = require('../../src/index')

describe('Character Controller sucess', () => {

    const myCharacter = {
        id: 1011334
    }

    it('Call listAll method should shows all characters', async () => {
        const res = await request(app)
            .get("/v1/public/characters")
            expect (res.status).toBe(200);
    })

    it('Call listAll method should shows all characters', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id)
            expect (res.status).toBe(200);
    })

    it('Call listAll method should shows all characters', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + 123)
            expect (res.status).toBe(404);
    })

    it('Call listAll method should shows all characters', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id + "/events")
            expect (res.status).toBe(200);
    })
})