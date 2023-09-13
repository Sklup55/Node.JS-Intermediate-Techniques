// Import the 'events' module
const EventEmitter = require('events');

// Create a custom event emitter
const customEmitter = new EventEmitter();

// Register an event listener
customEmitter.on('customEvent', (message) => {
  console.log('Received Message:', message);
});

// Emit a custom event
customEmitter.emit('customEvent', 'Hello, Event!');
