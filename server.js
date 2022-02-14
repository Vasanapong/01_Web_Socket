const Websocket = require('ws')

const wss = new Websocket.Server({ port: 4000 })

wss.on('connection',(ws)=>{
    let i = 0
    ws.on('message',(message)=>console.log(`${message}`))
    ws.on('close',()=>console.log('disconnected'))
    setInterval(()=>ws.send(i),1000)
})