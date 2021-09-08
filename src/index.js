const serverless = require('serverless-http');
const express = require('express');

const { get: getCarts } = require('./carts');
const { get: getParams } = require('./params');
const { get: getPricings } = require('./pricings');
const { get: getUser } = require('./user');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/carts', getCarts);
app.get('/params', getParams);
app.get('/pricings-by-weight', getPricings);
app.get('/user/:id', getUser);

module.exports.handler = serverless(app);
