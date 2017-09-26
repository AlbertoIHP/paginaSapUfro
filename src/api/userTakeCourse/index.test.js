import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { UserTakeCourse } from '.'

const app = () => express(routes)

let userSession, userTakeCourse

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  userTakeCourse = await UserTakeCourse.create({})
})

test('POST /userTakeCourses 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, matriculaEstudiante: 'test', nameCurso: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.matriculaEstudiante).toEqual('test')
  expect(body.nameCurso).toEqual('test')
})

test('POST /userTakeCourses 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /userTakeCourses 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /userTakeCourses/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${userTakeCourse.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userTakeCourse.id)
})

test('GET /userTakeCourses/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /userTakeCourses/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${userTakeCourse.id}`)
    .send({ access_token: userSession, matriculaEstudiante: 'test', nameCurso: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(userTakeCourse.id)
  expect(body.matriculaEstudiante).toEqual('test')
  expect(body.nameCurso).toEqual('test')
})

test('PUT /userTakeCourses/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${userTakeCourse.id}`)
  expect(status).toBe(401)
})

test('PUT /userTakeCourses/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: userSession, matriculaEstudiante: 'test', nameCurso: 'test' })
  expect(status).toBe(404)
})

test('DELETE /userTakeCourses/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${userTakeCourse.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /userTakeCourses/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${userTakeCourse.id}`)
  expect(status).toBe(401)
})

test('DELETE /userTakeCourses/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})
