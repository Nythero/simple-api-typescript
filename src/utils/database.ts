import 'reflect-metadata'
import { DataSource } from 'typeorm'
import User from '../models/User'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sql',
  entities: [User],
  synchronize: true,
  logging: false
})

export default AppDataSource 
