const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} with id: ${id}`)
})


customEmitter.emit('response', 'ashmit', 34)