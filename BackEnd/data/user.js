import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'deantornadoo@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hieu',
    email: 'lethanhieu@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Khai',
    email: 'nguyenthanhkhai@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
