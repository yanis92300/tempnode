const os = require("os")
// info about current user
const user = os.userInfo()

//method retunrs the system uptime in s
console.log(os.uptime())

const CurrentOs = {
name : os.type(),
release : os.release(),
totalMem :os.totalmem(),
freemen : os.freemem(),

}

console.log(CurrentOs)
