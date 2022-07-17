const express = require('express');
const marked = require('marked')

const router = express.Router();

router.post('/interface/note/:noteName', (req, res) => {
    const haha = req.body.getContent;
    console.log(marked.parse(haha))
    res.end()
})

module.exports = router;