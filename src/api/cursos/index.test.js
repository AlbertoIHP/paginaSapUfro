import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Cursos } from '.'

const app = () => express(routes)

let userSession, cursos

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  cursos = await Cursos.create({})
})

test('POST /cursos 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, name: 'test', description: 'test', date: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.user).toEqual('test')
})

test('POST /cursos 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /cursos 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /cursos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${cursos.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cursos.id)
})

test('GET /cursos/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cursos/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${cursos.id}`)
    .send({ access_token: userSession, name: 'test', description: 'test', date: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cursos.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /cursos/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${cursos.id}`)
  expect(status).toBe(401)
})

test('PUT /cursos/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: userSession, name: 'test', description: 'test', date: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cursos/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${cursos.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /cursos/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${cursos.id}`)
  expect(status).toBe(401)
})

test('DELETE /cursos/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})
