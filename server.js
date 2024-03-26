// ---------Server Instantiate----------
// WAY 1 -> Basic 
const express = require('express');
const app = express();

//Activate the server on 3000 port
app.listen(3000, () =>{
    console.log("Server Started at port No. 3000");
})

// WAY 2 -> Using CreateServer
const express = require('express');
const http = require('http');
const app1 = express();

const server = http.createServer(app);
server.listen(5000, ()=>{
    console.log("Server Started at Port Number 5000");
})

//used to parse request.body in express -> only used in POST and PUT reuqest
const bodyParser = require('body-parser');

//Specifically parse JSON Data & add it in the request.body object
app.use(bodyParser.json());

//Routes
app.get('/', (request, response) =>{
    response.send("Hello, Express....")
})

app.post('/api/cars', (request, resposne) =>{
    const{name, brand} = request.body;
    console.log(name);
    console.log(brand);

    resposne.send("Card submitted Successfully")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (() => {console.log("Connected SuccessFull")})
.catch((error) => {console.log("Recieved An error")});