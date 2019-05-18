require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const bodyParser = require('body-parser');
const cors = require('cors'); 
const controller = require("./server/controller");

const app = express(); 

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(cors()); 
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log(err)); 


app.get('/api/inventory', controller.read); 
app.post('/api/product', controller.create)
app.delete('/api/inventory/:product_id', controller.delete)

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Purring on port ${SERVER_PORT}`))

