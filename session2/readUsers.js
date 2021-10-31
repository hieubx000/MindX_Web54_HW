const fs = require('fs')
const readUsers = async() => {
    try {
        const data = await fs
            .promises.readFile('users.json', { encoding: 'utf-8' });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
module.exports = readUsers;