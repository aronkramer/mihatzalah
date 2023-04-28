if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const expressLayout = require('express-ejs-layouts')

const homeRouter = require('./routes/home')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))

app.use('/', homeRouter)

app.listen((process.env.PORT) || 3000)