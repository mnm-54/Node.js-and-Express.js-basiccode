// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

function sayHello(name){
    console.log(`hello ${name}`)
}
const munem='munem'
sayHello('world')
sayHello(munem)

module.exports=sayHello;