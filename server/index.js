require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const qanda = require('./controllers/qanda');
const { getRelatedProductIDs, getRelatedInfo } = require('./controllers/related');
const logger = require('./middleware/logger');

const app = express();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${products[0].product_id}
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/questions', (req, res) => {
<<<<<<< HEAD
  qanda.getQuestionList(req.query.product_id, req.query.count, (results) => {
=======
  qanda.getQuestionList(req.query.product_id, (results) => {
>>>>>>> master
    res.send(results);
  });
});

<<<<<<< HEAD
app.post('/answer', (req, res) => {
  qanda.submitAnswer(req.query.question_id, req.body, (results) => {
    res.status(204).send();
  });
});

app.post('/question', (req, res) => {
  qanda.submitQuestion(req.query.product_id, req.body, (results) => {
    res.status(204).send();
  });
});

=======
>>>>>>> master
app.put('/helpfulq', (req, res) => {
  qanda.helpfulQuestion(req.query.question_id, (results) => {
    res.status(204).send();
  });
});

app.put('/helpfula', (req, res) => {
  qanda.helpfulAnswer(req.query.answer_id, (results) => {
    res.status(204).send();
  });
<<<<<<< HEAD
});

app.put('/reporta', (req, res) => {
  qanda.reportAnswer(req.query.answer_id, (results) => {
    res.status(204).send();
  });
});

app.put('/reportq', (req, res) => {
  qanda.reportQuestion(req.query.question_id, (results) => {
    res.status(204).send();
  });
});
=======
>>>>>>> master

app.get('/products/:product_id/related', (req, res) => {
  getRelatedProductIDs(req, res)
    .then((results) => results.data)
    .then((relatedResults) => getRelatedInfo(relatedResults))
    .then((results) => Promise.all(results))
    .then((results) => results.map((result) => result.data))
    .then((results) => res.send(results).sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
