//event emitter is a class
const EventEmitter = require('events');

var url="www.google.com";

//have all functionality of eventEmitter
class Logger extends EventEmitter {
  //additional functionality
  log(message) {
    console.log(message);

    this.emit('messageLogged', {id:1, url:'http://'})

  }
}

module.exports = Logger;