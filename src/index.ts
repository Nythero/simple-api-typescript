import app from './app'
import { PORT } from './utils/config'

app.listen(
  PORT, 
  () => console.log(`listening at http://localhost:${PORT}`)
)
