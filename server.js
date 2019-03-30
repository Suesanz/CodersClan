const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'pug')
app.use('/', express.static(__dirname + '/style/'))
app.use('/', express.static(__dirname + '/views/'))
app.use('/', express.static(__dirname + '/pics/'))

const data = require('./views/frontend')
app.get('/', (req, res) => {
    res.render('homepage', {data: data})
})
app.listen(2000, () => {
    console.log("Server started at 2000")
})