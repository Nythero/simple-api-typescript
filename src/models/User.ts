type UserData = {
  username: string,
  passwordHash: string
}
type Create = (user: UserData) => Promise<{ username: string }>
const create : Create = async user => ({ username: user.username })
const User = {
  create
}

export default User
