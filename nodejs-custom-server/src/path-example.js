const path = require('path');

// Function to resolve a given path
function resolvePath(relativePath) {
    return path.resolve(relativePath);
}

// Function to join multiple path segments
function joinPaths(...segments) {
    return path.join(...segments);
}

// Function to parse a given path
function parsePath(filePath) {
    return path.parse(filePath);
}

// Exporting the functions
module.exports = {
    resolvePath,
    joinPaths,
    parsePath
};
// ...existing code...

if (require.main === module) {
    triggerEvent({ message: 'Hello from event-example.js!' });
}