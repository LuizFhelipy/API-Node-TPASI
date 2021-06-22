const request = require('supertest')
const app = require('../../src/index')
describe('Character Controller sucess', () => {

    const myCharacter = {
        id: 1011334
    }

    it('Call listAll method should shows all characters', () => {
        request(app)
            .get("/v1/public/characters")
            .expect('status', 200)
            .expect('body.status', 'Okk')
    })
})