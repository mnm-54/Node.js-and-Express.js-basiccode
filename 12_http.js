const http= require('http');

const server= http.createServer((req,res)=>{
    res.write('hello world')
    
    console.log('listening to port 5000')
    res.end()
});

server.listen(5000)
