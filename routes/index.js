const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
}) //the GET part of RESTful

module.exports = router //now will set the exports