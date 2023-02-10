require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const qanda = require('./controllers/qanda');
const {
  getRelatedProductIDs, getProductInfo, getProductsInfo, getCardStyle, getReviewMetadata,
} = require('./controllers/related');
const logger = require('./middleware/logger');
const axios = require('axios');
const compression = require('compression');

const app = express();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${products[0].product_id}
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(compression());
// app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/questions', (req, res) => {
  qanda.getQuestionList(req.query.product_id, req.query.count, (results) => {
    res.send(results);
  });
});

app.get('/products', (req, res) => {
  qanda.getProducts((results) => {
    res.send(results);
  });
});

app.get('/productsid', (req, res) => {
  qanda.getProductId(req.query.product_id, (results) => {
    res.send(results);
  });
});

app.get('/productstyles', (req, res) => {
  qanda.getProductsStyle(req.query.product_id, (results) => {
    res.send(results);
  });
});

app.post('/cart', (req, res) => {
  qanda.postCart(req.body, (result) => {
    res.sendStatus(201).send();
  });
});

app.get('/cart', (req, res) => {
  qanda.getCart((results) => {
    res.send(results);
  });
});

app.get('/revs', (req, res) => {
  qanda.getRevs(req.query.product_id, (results) => {
    res.send(results);
  });
});

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

app.get('/products/:product_id/related', (req, res) => {
  getRelatedProductIDs(req, res)
    .then((results) => results.data)
    .then((results) => res.status(200).send(results))
    .catch(() => res.status(500));
});

app.get('/products/:product_id/details', (req, res) => {
  getProductInfo(req.params.product_id)
    .then((results) => results.data)
    .then((results) => res.status(200).send(results))
    .catch(() => res.status(500));
});

app.get('/products/:product_id/styles', (req, res) => {
  getCardStyle(req.params.product_id)
    .then((results) => results.data)
    .then((results) => res.status(200).send(results))
    .catch(() => res.send(500));
});

app.get('/products/id', (req, res) => {
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

app.get('/reviews/:product_id/meta', (req, res) => {
  getReviewMetadata(req.params.product_id)
    .then((results) => (results.data.ratings))
    .then((results) => res.status(200).send(results))
    .catch(() => res.status(500));
});

app.get('/reviews', (req, res) => {
  var id = JSON.stringify(req.query.productID);

  console.log('get reviews', req.query.productID);
  qanda.getReviews(id, results => {
    console.log('successful get from server/index.js');
    res.send(results);
  })
});

app.get('/metadata', (req, res) => {
  var id = req.query.productID * 1;

  console.log('ID FROM METADATA', id, id * 1);
  qanda.getMetadata(id, results => {
    console.log('successful get from metadata/index.js');
    res.send(results);
  });
});

app.get('/sortedReviews', (req, res) => {

  var query =  req.query.option.toLowerCase();
  var id = req.query.productID;
  console.log('reqqqqq', req.query.option, id);
  //something on req object has to have sort option

  // console.log('get reviews', req);
  qanda.getSortedReviews(query, id, (results) => {
    console.log('successful get from metadata/index.js');
    res.send(results);
  })
})

app.put('/helpfulR', (req, res) => {
  console.log('im in helpful boss!', req.body)
  qanda.helpfulReview(req.body.review_id, (results, err) => {
    if (err) {
      console.log('err in helpfulR index.js');
    } else {
      console.log('successful put in index.js son');
       res.send(results);
       res.status(204).send();
    }
  })
 });

 app.put('/reportR', (req, res) => {
  console.log('im in report boss!', req.body)
  qanda.reportReview(req.body.review_id, (results, err) => {
    if (err) {
      console.log('err in reportR index.js', err);
    } else {
      console.log('successful put in index.js son', results);
       res.send(results);
      //  res.status(204).send();
    }
  })
 });

app.post('/postReview', (req, res) => {
  req.body.product_id = Number(req.body.product_id);
  req.body.rating = Number(req.body.rating);
  // req.body.characteristics = JSON.stringify(req.body.characteristics);
  // req.body.photos = JSON.stringify(req.body.photos);
  console.log('reqbody post', req.body)

  qanda.postReview(req.body, (err, results) => {
    if (err) {
      console.log('err', err);
    } else {
      console.log('successful post review, son', results);
      // res.send(JSON.stringify(results));
      res.send(results);
    }

  })
});

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
