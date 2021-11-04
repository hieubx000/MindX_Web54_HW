const express = require('express');
const commentCRUD = require('./commentCRUD')

const app = express();

app.use(express.json())

//lấy tất cả comments
app.get('/comments', async(req, res) => {
    const allComments = await commentCRUD.getAllCmt();

    res.send({
        data: allComments
    })
})

// lấy comment theo thời gian
app.get('/comments/:time', async(req, res) => {
    const { time } = req.params
    const foundCmt = await commentCRUD.getCmt(String(time));

    res.send({
        data: foundCmt
    })
})

// đăng comment mới
app.post('/comments', async(req, res) => {
    const contentCmt = req.body;

    const newCmt = await commentCRUD.createCmt(contentCmt);

    res.send({
        data: newCmt
    })
})

// sửa comment
app.put('/comments/:updateTime', async(req, res) => {
    const { updateTime } = req.params
    const contentUpdate = req.body;

    const updateCmt = await commentCRUD.updateCmt(String(updateTime), contentUpdate);

    res.send({
        data: updateCmt
    })
})

// xóa comments
app.delete('/comments/:deleteCmtTime', async(req, res) => {
    const { deleteCmtTime } = req.params

    const deleteCmt = await commentCRUD.deleteCmt(String(deleteCmtTime));

    res.send({
        data: deleteCmt
    })
})

app.listen(9000, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server started');
})