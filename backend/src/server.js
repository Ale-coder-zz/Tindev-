const express = require ('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://playcerbr:26271280@cluster0-ui8h3.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true 
});
 

server.use(express.json());
server.use(routes); 

server.listen(3333);
