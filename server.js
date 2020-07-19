const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {

    socket.on('colorIt', (data) => {
        io.emit('colorIt', data)
    })



    console.log('connection', socket.id)
})


server.listen(4646, () => {
    console.log('server started on http://localhost:4646')
})