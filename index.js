require('dotenv').config()
const express = require('express')
const path = require('path')

const { SERVER_PORT } = process.env

const app = express()

app.get('/api/test', (req, res) => {
  res.send('yaba daba dooo!')
})

// Serve front end files
app.use(express.static(`${__dirname}/public/build`))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/build/index.html`))
})

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}.`)
)
