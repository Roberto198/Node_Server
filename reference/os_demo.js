const os = require('os');

//Platform
console.log(os.platform())

//CPU ARchitecture
console.log(os.arch())

//cpu cores
// console.log(os.cpus())

//system memory
console.log(os.freemem())

//Total memory
console.log(os.totalmem())

//home directory:
console.log(os.homedir())

//os uptime
console.log(os.uptime())