const fs = require('fs')
const readUser = async(id) => {
    try {
        const data = await fs
            .promises.readFile('users.json', { encoding: 'utf-8' });
        const newData = JSON.parse(data);
        const dataFilter = newData.filter(user => {
            return user.id == id;
        })
        console.log(dataFilter);
    } catch (err) {
        console.log(err);
    }
}
module.exports = readUser;