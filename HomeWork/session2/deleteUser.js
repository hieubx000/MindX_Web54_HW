const fs = require('fs')
const deleteUser = async(id) => {
    try {
        const stringUsers = await fs
            .promises.readFile('users.json', { encoding: 'utf-8' });
        const users = JSON.parse(stringUsers);
        // const dataFilter = users.filter(user => {
        //     return user.id == id;
        // })
        const newUsers = users.filter(user => user.id != id)
        await fs.promises.writeFile('users.json', JSON.stringify(newUsers))
    } catch (err) {
        console.log(err);
    }
}
module.exports = deleteUser;