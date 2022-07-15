import { Router } from 'express'
const authController = Router()

authController.post('/login', (_req, res) => {
  res.status(204).end()
})

export default authController
