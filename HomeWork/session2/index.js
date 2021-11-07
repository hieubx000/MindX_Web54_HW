const fs = require('fs')
const addUser = require('./addUser')
const readUsers = require('./readUsers')
const readUser = require('./readUser')
const deleteUser = require('./deleteUser')
const updateUser = require('./updateUser')

const users = [
    { id: 1, username: 'Hieu', password: '123456' },
    { id: 2, username: 'Nam', password: '123456' },
    { id: 3, username: 'Linh', password: '123456' }
];

const newData = { id: 3, username: 'Tu Linh', password: '123' }

//CREATE FILE
// fs.writeFile(
//         'users.json',
//         JSON.stringify(users), {
//             flag: 'a'
//         },
//         (err) => {
//             console.log(err);
//         })

//ADD USER
// addUser({ username: "Tuan", password: '123456' })

//READ_USER
// readUsers()
// readUser(2)

//UPDATE_USER
// updateUser(3, newData)

//DELETE_USER
deleteUser(4)