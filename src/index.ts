import app from './app'
import { PORT } from './utils/config'
import AppDataSource from './utils/database'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await AppDataSource.initialize()
  app.listen(
    PORT, 
    () => console.log(`listening at http://localhost:${PORT}`)
  )
})()
