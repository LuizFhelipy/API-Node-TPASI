const sinon = require('sinon')
const request = require('supertest')
const app = require('../../src/routes/characterRoute')
const chai = require('chai')
const expect = chai.expect
const controller = require('../../src/controller/character.controller')

describe('Character Controller sucess', () => {

  const myCharacter = {
    id: 1011334
  }

  it('Call listAll method should shows all characters', () => {
    const req = {}
    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listAll(req, res)
    expect(res.send.calledOnce).to.be.true
  })

  it('Call listOne method should shows one character by id', () => {
    const req = {
      body: myCharacter,
      params: {
        id: myCharacter.id
      }
    }

    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listOne(req, res)
    expect(res.send.calledOnce).to.be.true
  })

  it('Call listcharactercomics method should shows comics with id', () => {
    const req = {
      body: myCharacter,
      params: {
        id: myCharacter.id
      }
    }

    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listcharactercomics(req, res)
    expect(res.send.calledOnce).to.be.true
  })

  it('Call listcharacterevents method should shows events with id', () => {
    const req = {
      body: myCharacter,
      params: {
        id: myCharacter.id
      }
    }

    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listcharacterevents(req, res)
    expect(res.send.calledOnce).to.be.true
  })

  it('Call listcharacterseries method should shows series with id', () => {
    const req = {
      body: myCharacter,
      params: {
        id: myCharacter.id
      }
    }

    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listcharacterseries(req, res)
    expect(res.send.calledOnce).to.be.true
  })

  it('Call listcharacterstories method should shows stories with id', () => {
    const req = {
      body: myCharacter,
      params: {
        id: myCharacter.id
      }
    }

    const res = {}
    res.status = () => res
    res.send = sinon.spy()

    controller.listcharacterstories(req, res)
    expect(res.send.calledOnce).to.be.true
  })
})

describe('Character Route Test', () => {
  it('Call listAll method should shows all characters', async () => {
    const response = await request(app)
      .get("v1/public/characters")
    expect(response.status).toBe(200)
  })
})

it('Call listOne method should shows one character by id', async () => {
  const response = await request(app)
    .get("v1/public/characters/" + id)
  expect(response.status).toBe(200)
})

it('Call listcharactercomics method should shows comics with id', async () => {
  const response = await request(app)
    .get("v1/public/characters/" + id + "/comics")
  expect(response.status).toBe(200)
})

it('Call listcharactercomics method should shows events with id', async () => {
  const response = await request(app)
    .get("v1/public/characters/" + id + "/events")
  expect(response.status).toBe(200)
})

it('Call listcharactercomics method should shows series with id', async () => {
  const response = await request(app)
    .get("v1/public/characters/" + id + "/series")
  expect(response.status).toBe(200)
})

it('Call listcharactercomics method should shows stories with id', async () => {
  const response = await request(app)
    .get("v1/public/characters/" + id + "/stories")
  expect(response.status).toBe(200)
})