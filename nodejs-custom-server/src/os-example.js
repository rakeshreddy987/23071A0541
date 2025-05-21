const os = require('os');

function getOSInfo() {
    return {
        architecture: os.arch(),
        platform: os.platform(),
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        cpuCount: os.cpus().length,
        hostname: os.hostname(),
    };
}

function displayOSInfo() {
    const info = getOSInfo();
    console.log('Operating System Information:');
    console.log(`Architecture: ${info.architecture}`);
    console.log(`Platform: ${info.platform}`);
    console.log(`Free Memory: ${info.freeMemory} bytes`);
    console.log(`Total Memory: ${info.totalMemory} bytes`);
    console.log(`CPU Count: ${info.cpuCount}`);
    console.log(`Hostname: ${info.hostname}`);
}

module.exports = {
    getOSInfo,
    displayOSInfo,
};
// ...existing code...

if (require.main === module) {
    displayOSInfo();
}