const url = 'ws://127.0.0.1:8080/websocket'
const server = new WebSocket(url)

const messages = document.getElementById('messages')
const input = document.getElementById('message')
const sendBtn = document.getElementById('send')

sendBtn.disabled = true
sendBtn.addEventListener('click', sendMessage, false)

function sendMessage() {
  const text = input.value
  generateMessageEntry(text, 'Client')
  server.send(text)
}

server.onopen = () => {
  sendBtn.disabled = false;
}

server.onmessage = (event) => {
  const { data } = event
  generateMessageEntry(data, 'Server')
}

function generateMessageEntry(msg, type) {
  const newMessage = document.createElement('div')
  newMessage.innerText = `${type} : ${msg}`
  messages.appendChild(newMessage)
}