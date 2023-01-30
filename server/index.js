require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const qanda = require('./controllers/qanda');
const { getRelatedProductIDs, getProductsInfo } = require('./controllers/related');
const logger = require('./middleware/logger');

const app = express();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${products[0].product_id}
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/questions', (req, res) => {
  qanda.getQuestionList(req.query.product_id, (results) => {
    res.send(results);
  });
});

app.put('/helpfulq', (req, res) => {
  qanda.helpfulQuestion(req.query.question_id, (results) => {
    res.status(204).send();
  });
});

app.put('/helpfula', (req, res) => {
  qanda.helpfulAnswer(req.query.answer_id, (results) => {
    res.status(204).send();
  });
});

app.get('/products/:product_id/related', (req, res) => {
  getRelatedProductIDs(req, res)
    .then((results) => results.data)
    .then((relatedResults) => getProductsInfo(relatedResults))
    .then((results) => Promise.all(results))
    .then((results) => results.map((result) => result.data))
    .then((results) => res.status(200).send(results))
    .catch(() => res.status(500));
});

app.get('/outfit-products/', (req, res) => {
  // req.query.q
  // console.log(JSON.parse(req.query.q).map((numStr) => Number.parseInt(numStr, 10)));
  const outfitIDs = new Promise((resolve, reject) => {
    resolve(JSON.parse(req.query.q).map((numStr) => Number.parseInt(numStr, 10)));
  });

  outfitIDs
    .then((ids) => getProductsInfo(ids))
    .then((results) => Promise.all(results))
    .then((results) => results.map((result) => result.data))
    .then((results) => res.status(200).send(results))
    .catch(() => res.status(500));
});

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
