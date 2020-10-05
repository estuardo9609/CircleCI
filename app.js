const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/router/routes')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({message:"Not Found"})
})

let PORT

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  PORT = 80
  app.listen(PORT, () => console.log('Project listening on port 80'))
} else {
  PORT = 3001
  app.listen(PORT, () => console.log('Project listening on port 3001'))
}
