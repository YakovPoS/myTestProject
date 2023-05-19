const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        this.emit('message', `${message} ${new Date(Date.now())}`)
    }   
}

const logger = new Logger() 

logger.on('message', data=>{
    console.log(data)
})

logger.log('Vse chto ugodno')
logger.log('additional inf')