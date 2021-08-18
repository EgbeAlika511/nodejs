/** 
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // function that represents an express module

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res)=>res.sendFile(__dirname + '/index.html'));

app.post('/', (req, res)=>{
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    
    res.send(`The result of the calculation is ${result}`)
})
app.listen(4000, ()=>console.log(`server started on port 3000`));
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') { 
        res.end('Hello welcome')
    }
    if(req.url === '/about'){ 
        res.end('this is the about page')
    }
    if(req.url === '/contact'){ 
        res.end('this is the contact page')
    }

    res.end(`
        <h1>Sorry!</h1>
        <p>We can't find what you are looking for</p> 
        <a href='/'>back to home</a>
    `)  
});


server.listen(5000);