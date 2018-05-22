'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// Require the module webhook/index.js
let webhook = require('./webhook')

// This two following lines ensures that every incomming request is parsed to json automatically
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Handle POST http requests on the /webhook endpoint
app.post('/webhook', webhook)

// The server is now listening on the port 8080
app.listen(8080)
console.log('info', `server listening on port 8080`)
