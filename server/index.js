const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const controller = require('./controller');

const app = express()

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
}).catch(err=>console.log(err));

app.get('./api/house', controller.create);

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`);});