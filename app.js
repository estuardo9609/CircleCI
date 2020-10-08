const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/router/routes')
const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api', routes)

app.get('/', (req, res, next) => {
  res.json('WELCOME TO THIS CIRCLE CI SIMPLE TUTORIAL.')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({message:"Not Found"})
})

let PORT

PORT = 80
app.listen(PORT, () => console.log('Project listening on port 80'))
