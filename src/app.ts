import express from 'express'
import authController from './controllers/auth'
import userController from './controllers/users'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use('/auth', authController)
app.use('/users', userController)
app.use(errorHandler)

export default app
