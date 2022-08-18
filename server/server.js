// const WebSocket = require('ws')
// const express = require('express')
// const path = require('path')
const os = require('os');
const pty = require('node-pty');

// const app = express()

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

var ptyProcess = pty.spawn("shell", [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: '/home/damner/code/node_modules',
  env: process.env
});

ptyProcess.on('data', function (data) {
  process.stdout.write(data);
});

ptyProcess.write('ls\r');


// app.use('/', express.static(path.resolve(__dirname, '../client')))

// const server = app.listen(8080, () => console.log(`ws on port : 8080`))

// const wss = new WebSocket.Server({
//   server
// })

// wss.on('connection', (ws) => {
//   ws.on('message', data => {
//     console.log(data.toString())
//     ptyProcess.write(`${data.toString()}\r`);
//   })
// })