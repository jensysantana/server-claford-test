'use strict'

const express = require('express');

const app = express();

app.use(express.urlencoded({
    extended: false,
    limit: '100kb'
}));


app.get('/', (req, res) => {
    return res.status(200).json({
        name: 'jensy',
        lasN: 'santana'
    })
})

app.use(express.json());


module.exports = app;