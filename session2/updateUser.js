const fs = require('fs');
const updateUser = async(id, dataUpdate) => {
    try {
        const stringUsers = await fs
            .promises.readFile('users.json', { encoding: 'utf-8' });
        const users = JSON.parse(stringUsers);
        const newUsers = users.filter(user => user.id != id)
        newUsers.push(dataUpdate)
            // console.log(newUsers);
            // console.log(newUsers1);
        await fs.promises.writeFile('users.json', JSON.stringify(newUsers))
            // await fs.promises.appendFile('users.json', dataUpdate, function(err) {
            //     if (err) throw err;
            //     console.log('Updated!');
            // });
        console.log("Sua doi thanh cong");
    } catch (err) {
        console.log(err);
    }
}
module.exports = updateUser;