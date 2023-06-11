'use strict';

const express  = require('express');
const client = require('./model/client')

const app = express();

const cors = require('cors');
const routes = require('./routes/routes.js');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(routes);
app.use('*',notFoundHandler);
app.use(errorHandler);


module.exports = {
    start : ()=>{
        client.connect()
        .then(()=>{
            app.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
            );
        })
    }
}