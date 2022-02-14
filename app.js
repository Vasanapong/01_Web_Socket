let connection = new WebSocket('ws:/localhost:4000')

connection.onopen = () => connection.send('connected')
connection.onmessage = (e) => console.log(e.data)