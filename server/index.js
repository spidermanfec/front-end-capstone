require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const qanda = require('./controllers/qanda');
const { getRelatedProductIDs, getRelatedInfo } = require('./controllers/related');
const logger = require('./middleware/logger');
const axios = require('axios');

const app = express();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${products[0].product_id}
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/questions', (req, res) => {
  qanda.getQuestionList(req.query.product_id, (results) => {
    console.log(req.query.product_id);
    res.send(results);
  });
});

app.get('/products', (req, res) => {
  qanda.getProducts((results) => {
    res.send(results);
  });
});

app.get('/productsid', (req, res) => {
  qanda.getProductId((results) => {
    res.send(results);
  });
});

app.get('/productstyles', (req, res) => {
  qanda.getProductsStyle((results) => {
    res.send(results);
  });
});

app.get('/products/:product_id/related', (req, res) => {
  qanda.getRelatedProductIDs(req, res)
    .then((results) => results.data)
    .then((relatedResults) => getRelatedInfo(relatedResults))
    .then((results) => Promise.all(results))
    .then((results) => results.map((result) => result.data))
    .then((results) => res.send(results).sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
