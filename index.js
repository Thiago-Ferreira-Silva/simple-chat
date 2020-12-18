const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 8080

app.use(express.static(__dirname + '/public'))

io.on('connection', socket => {
    console.log('An user has connected')
    socket.on('chat message', msg => {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('An user has disconnected')
    })
})

http.listen(port, () => {
    console.log('Running on port:', port)
})