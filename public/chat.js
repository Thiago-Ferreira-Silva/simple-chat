const socket = io()
socket.emit('user', sessionStorage.getItem('name'))

function appendToMessages(elementClass = '', msg  = '') {
    const message = document.createElement('li')
    message.innerText = msg
    message.classList.add(elementClass)
    document.getElementById('messages').appendChild(message)
}

function sendMessage() {
    const message = document.getElementById('message')
    appendToMessages('my-message', message.value)
    socket.emit('chat message', message.value)
    message.value = ''
}

socket.on('chat message', msg => {
    appendToMessages('message', msg)
})

socket.on('user connection', msg => {
    appendToMessages('connection', msg)
})