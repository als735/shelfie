require('dotenv').config();
const express = require('express'); 
const app = express(); 
const ctrl = require('./server/controller')
const { json } = require('body-parser');
const massive = require('massive'); 
const controller = require("./server/controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log(err)); 


app.get('/api/inventory', controller.read); 
// app.post('/api/inventory', controller.create)
// app.delete('/api/inventory/:id', controller.delete)

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Purring on port ${SERVER_PORT}`))

