import * as functions from 'firebase-functions'

// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!')
// })

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(
  jsonServer.rewriter({
    '/v2020*/*': '/$2',
    '/classes/:id/lessons': '/lessons'
  })
)
server.use(middlewares)
server.use(router)

// exports.api = functions.https.onRequest(server)
export const api = functions.https.onRequest(server)
