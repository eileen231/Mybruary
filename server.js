if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //load up/imports the dependencies if not in right environment
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') //reference to the index router 

app.set('view engine', 'ejs') 
app.set('views', __dirname + '/views') //where server files will go

app.set('layout', 'layouts/layout') //every single file will be putinside in here so we don't have to duplicate header/footer html code
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) // don't want to hardcode this
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000) //gonna tell us what port it is listening to