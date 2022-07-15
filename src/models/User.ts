import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  username!: string
  @Column()
  passwordHash!: string
}

type UserData = {
  username: string,
  passwordHash: string
}
type Create = (user: UserData) => Promise<{ username: string }>
export const create : Create = async user => ({ username: user.username })
