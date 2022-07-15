import supertest from 'supertest'
import app from '../src/app'

const api = supertest(app)

test('user creation succeeds', async () => {
  const newUser = {
    username: 'username',
    password: 'password'
  }
  const response = await api.post('/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/)
  expect(response.body).toBeDefined()
  expect('username' in response.body).toBeTruthy()
  expect(typeof response.body.username === 'string').toBeTruthy
})
