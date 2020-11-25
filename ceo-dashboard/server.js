const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, '')
app.use(express.static(viewsDir))


app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', (req, res) => res.sendFile(path.join(viewsDir, 'ceo-login.html')))
app.get('/ceo', (req, res) => res.sendFile(path.join(viewsDir, 'ceo.html')))
app.get('/ceo-earth', (req, res) => res.sendFile(path.join(viewsDir, 'ceo-earth.html')))
app.get('/index', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))
app.get('/db', (req, res) => res.sendFile(path.join(viewsDir, 'ceo-db.html')))



app.listen(3001, () => console.log('Listening on port 3001!'))

