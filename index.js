require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const path = require('path')

const { NODE_ENV, SERVER_PORT } = process.env

const app = express()

app.get('/api/test', (req, res) => {
  res.send('yaba daba dooo!')
})

app.post('/api/test', (req, res) => {
  console.log('Still getting hit')
})

// Serve front end files
app.use(express.static(`${__dirname}/public/build`))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/build/index.html`))
})

console.log(`Server NODE_ENV is set to: ${NODE_ENV}`)

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}.`)
)
