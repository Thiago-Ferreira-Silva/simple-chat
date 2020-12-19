const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 8080

app.use(express.static(__dirname + '/public'))

io.on('connection', socket => {
    socket.on('user', user => {
        socket.user = user
        io.emit('user connection', `${socket.user} has connected`)
    })
    socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', socket.user + ': ' + msg)
    })
    socket.on('disconnect', () => {
        io.emit('user connection', `${socket.user} has disconnected`)
    })
})

http.listen(port, () => {
    console.log('Listenning on port:', port)
})