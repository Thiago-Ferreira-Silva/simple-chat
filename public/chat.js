const socket = io()

function sendMessage() {
    const message = document.getElementById('message')
    const form = document.getElementById('form')
    socket.emit('chat message', message.value)
    message.value = ''
}

socket.on('chat message', msg => {
    const message = document.createElement('li')
    message.innerText = msg
    message.classList.add('message')
    document.getElementById('messages').appendChild(message)
})


//agora transfira isso para um arquivo separado com socket.io-client
//adicione username, user is typing user entered, user left, users online
//quando alguém manda uma mensagem ela é enviada para os outros e adicionada ao dom de uma forma diferente para quem a enviou
//faça um aplicativo de mensagens com react-native