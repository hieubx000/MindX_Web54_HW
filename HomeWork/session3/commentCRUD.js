const fs = require('fs');
const uuid = require('uuid');
const timestamp = require('time-stamp');

// lấy tất cả comments
const getAllCmt = async() => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
        const comments = JSON.parse(jsonComments)
        return comments;

    } catch (err) {
        console.log(err);
        return [];
    }
}

// lấy comment theo thời gian 
const getCmt = async(time) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
        const comments = JSON.parse(jsonComments)

        const foundCmt = comments.find(cmt => cmt.time === time)
        return foundCmt ? foundCmt : null;
    } catch (err) {
        console.log(err);
        return null;
    }
}

// thêm comment mới
const createCmt = async(contentCmt) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
        const comments = JSON.parse(jsonComments)

        const newCmt = {
            id: uuid.v1(),
            time: timestamp('YYYY:MM:DD-HH:mm:ss'),
            ...contentCmt
        }

        const newCmts = [...comments, newCmt]
        await fs.promises.writeFile('comments.json', JSON.stringify(newCmts))
        return newCmts
    } catch (err) {
        console.log(err);
        return null;
    }
}

// sửa comment
const updateCmt = async(time, contentUpdate) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
        const comments = JSON.parse(jsonComments)

        let foundIndex = comments.findIndex(cmt => cmt.time === time);
        console.log(foundIndex);
        if (foundIndex !== -1) {
            comments[foundIndex] = {
                ...comments[foundIndex],
                ...contentUpdate
            }

            await fs.promises.writeFile('comments.json', JSON.stringify(comments))
            return comments[foundIndex]
        }
        return null
    } catch (err) {
        console.log(err);
        return null;
    }
}

// xóa comment
const deleteCmt = async(time) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
        const comments = JSON.parse(jsonComments)

        const newComments = comments.filter(cmt => cmt.time !== time);


        await fs.promises.writeFile('comments.json', JSON.stringify(newComments))
        return true
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getAllCmt,
    getCmt,
    createCmt,
    updateCmt,
    deleteCmt
}