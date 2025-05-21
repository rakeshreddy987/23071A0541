const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

// Example event listener
customEmitter.on('eventOccurred', (data) => {
    console.log('An event has occurred:', data);
});

// Function to emit an event
function triggerEvent(data) {
    customEmitter.emit('eventOccurred', data);
}

// Exporting the triggerEvent function and customEmitter
module.exports = {
    triggerEvent,
    customEmitter
};
// ...existing code...

if (require.main === module) {
    triggerEvent({ message: 'Hello from event-example.js!' });
}