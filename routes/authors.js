const express = require('express')
const router = express.Router()

// All authors route
router.get('/',(req,res) => {
    res.render('authors/index')
})

// new authors route
router.get('/new',(req,res) => {
    res.render('authors/new')
})

// create author route
router.post('/', (req, rest) => {
    res.send('Create')
})

module.exports = router