const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const home = require('./routes/home.js');
 app.set('view engine','pug');
 app.set('views','pug_files');

app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname,'css')));

app.use(home);


//not found page
app.use((req,res,next)=>{
    res.status(404).render('error',{doc:' 404 Error Page '});   
})

const server = http.createServer(app);
server.listen(3002);