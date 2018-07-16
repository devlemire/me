require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const util = require('util')
const xml = require('xml')
require('body-parser-xml')(bodyParser)

const { NODE_ENV, SERVER_PORT } = process.env

// enrollment, application, contact
// if they change email

const app = express()

app.use(bodyParser.xml())

app.get('/api/test', (req, res) => {
  res.send('yaba daba dooo!')
})

app.post('/api/test', (req, res) => {
  console.log({ body: req.body, params: req.params, query: req.query })
  console.log(
    util.inspect(req.body['soapenv:Envelope']['soapenv:Body'], false, null)
  )

  var js = {
    element: [
      { _attr: { name: 'notificationsResponse' } },
      {
        complexType: [
          {
            sequence: [
              { element: [{ _attr: { name: 'Ack', type: 'xsd:boolean' } }] }
            ]
          }
        ]
      }
    ]
  }

  res.set('Content-Type', 'text/xml')
  res.send(xml(js))
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
