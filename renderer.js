// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const tableify = require('tableify')

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM3', {
  baudRate: 9600,
}).setEncoding('utf8')

// async function listSerialPorts() {
//   await SerialPort.list().then((ports, err) => {
//     if (err) {
//       document.getElementById('error').textContent = err.message
//       return
//     } else {
//       document.getElementById('error').textContent = ''
//     }
//     // console.log('ports', ports);

//     if (ports.length === 0) {
//       document.getElementById('error').textContent = 'No ports discovered'
//     }

//     tableHTML = tableify(ports)
//     document.getElementById('ports').innerHTML = tableHTML


//   })
// }
// listSerialPorts();


function loadData() {
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
  parser.on('data', console.log)
}
loadData();
