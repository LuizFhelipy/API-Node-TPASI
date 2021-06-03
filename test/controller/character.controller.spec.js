const sinon = require('sinon')
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

  it('Call listcharacterevents method should shows comics with id', () => {
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

  it('Call listcharacterseries method should shows comics with id', () => {
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

  it('Call listcharacterstories method should shows comics with id', () => {
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
