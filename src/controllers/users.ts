import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import ValidationError from '../utils/ValidationError'
const usersController = Router()

type Key = string | number | symbol
type VerifyIsObject = (o: unknown) => asserts o is Record<Key, unknown>
const verifyIsObject : VerifyIsObject = o => {
  if(!(o instanceof Object && o))
    throw new ValidationError('The object is not an Object', 'notAnObject', 'Object')
}

function verifyBody<T extends readonly string[]>(body: unknown, properties: T):
  asserts body is Record<T[number], unknown> {
  verifyIsObject(body)
  for(let i = 0; i< properties.length; i++) {
    if (!(properties[i] in body)) {
      throw new ValidationError(`${properties[i]} is not defined`, properties[i], 'undefined')
    }
  }
}

type VerifyIsString = (s: unknown) => asserts s is string
const verifyIsString : VerifyIsString = s => {
  if((typeof s !== 'string') && !(s instanceof String))
    throw new ValidationError(`The argument is not a string`, 'notAString', 'string')
}

usersController.post('/', (req, res, next) => {
  verifyBody(req.body, ['username', 'password'])
  const { username, password } = req.body
  verifyIsString(username)
  verifyIsString(password)
  const saltRounds = 10
  const addUser = async () => {
    try {
      const passwordHash = await bcrypt.hash(password, saltRounds)
      const newUser = { username, passwordHash }
      const user = await User.create(newUser)
      user.username
      res.status(201).json(user)
    }
    catch(err) {
      next(err)
    }
  }
  void addUser()
})

export default usersController
