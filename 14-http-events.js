const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('I run')
    res.end('Welcome')
})

server.listen(5000)