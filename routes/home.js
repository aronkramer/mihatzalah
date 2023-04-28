const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/faq', (req, res) => {
    res.render('home/faq')
})

router.get('/donate', (req, res) => {
    res.render('home/donate')
})

module.exports = router