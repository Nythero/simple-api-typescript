import supertest from 'supertest'
import app from '../src/app'

const api = supertest(app)

test('user creation without username fails', async () => {
  const newUser= {
    password: 'password'
  }
  await api.post('/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('user creation without password fails', async () => {
  const newUser= {
    username: 'username'
  }
  await api.post('/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('user creation with a noString username fails', async () => {
  const newUser= {
    username: {},
    password: 'password'
  }
  await api.post('/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('user creation with a noString password fails', async () => {
  const newUser= { username: 'username', password: {}
  }
  await api.post('/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('user creation with a an array body fails', async () => {
  const newUser: unknown[] = []
  await api.post('/users')
    .send(newUser)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

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
