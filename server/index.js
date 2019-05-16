require('dotenv').config();
const express = require('express'); 
const app = express(); 
const ctrl = require('./controller')
const { json } = require('body-parser');
const massive = require('massive'); 

app.use(json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log(err)); 

const port = process.env.port || 5000;
app.listen(port, () => console.log('Purring on port'))

