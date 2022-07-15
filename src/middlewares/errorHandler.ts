import { ErrorRequestHandler } from 'express'
import ValidationError from '../utils/ValidationError'

type IsSubError = <E extends Error>(err: Error, subError: string) => err is E
const isSubError : IsSubError = ((err, subError) =>
  err.name === subError) as IsSubError

type IsError = (err: unknown) => err is Error
const isError : IsError = (err => err instanceof Error) as IsError

const errorHandler : ErrorRequestHandler = (err, _req, res, _next) => {
  if(isError(err)) {
    if(isSubError<ValidationError>(err, 'ValidationError')) {
      res.status(400).json({ error: `${err.element} is invalid. Expected ${err.expected}` })
    }
  }
  else
    console.log(err, 'is not a instance of error')
}

export default errorHandler
