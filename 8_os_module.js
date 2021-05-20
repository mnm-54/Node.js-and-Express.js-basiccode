const os = require('os')

//userinfo
const user= os.userInfo()
 
//system uptime in seconds
//console.log(`the systemuptiem ${os.uptime()}`);

const currentOs={
    'user':os.hostname(),
    'memory':os.totalmem(),
    'free memory':os.freemem(),
    'release':os.release(),
}

console.log(currentOs);