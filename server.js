require('express-async-errors')
const http = require('http')
const path = require('path')
const express = require('express')
const app = express()
const server = http.createServer(app)

require('./src/middlewares/initialMiddlewares')(app)
const config = require('./src/config/constants')
const database = require('./src/config/database')
const errorMiddleware = require('./src/middlewares/errorHandler')
const apiRoutes = require('./src/routes')
// require(dotenv).config()

//endPoint
app.use('/api/v1', apiRoutes)

//Initial home route
app.use('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, './public', 'index.html'))
})

// Error Middleware
errorMiddleware(app)

const port  = config.port
server.listen(port, () => {
    database()
    console.log(`<<:::>> Listening on port ${port}`)
})

server.on('error', error => {
    console.log(`Error occured on the server ${error}`)
})