/*const http=require("http");
const port=8080;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("<h1 style= color: red>hello, here  your request send</h1")
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server start at port ${port}`);
})
    */

/*const http = require("http");
const fs = require("fs");

const port = 8081;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": 'text/html'
    });

    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return; // Exit the function in case of error
        }
        res.end(data); // Send the HTML data
    });
});

// Move server.listen outside of the createServer callback
server.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server started at port ${port}`);
});
*/
/*const http=require("http");
const port=8080;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("<h1 style= color: red>hello, here  your request send</h1")
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server start at port ${port}`);
})  */

   /* const http=require("http");
    const port=8080;
    const server=http.createServer((req,res)=>{
        res.end("hi hello world");
    });
    server.listen(port,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("connected server run at 8080");
    }) */

        const http=require('http');
        const port=8080;
        const server=http.createServer((req,res)=>{
            res.end("hi hello everyone")
        })
        server.listen(port,(err)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("your server run at 8080");

        })



