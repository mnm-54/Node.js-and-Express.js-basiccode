const fs = require('fs')

const first= fs.readFileSync('./first.txt','utf8')
const second=fs.readFileSync('./second.txt','utf8')
//console.log(first);

fs.writeFileSync('./result.txt',`this is the result ${first+second} \n`,{'flag':'a'});//{'flag':'a'} for append

console.log(first,second)