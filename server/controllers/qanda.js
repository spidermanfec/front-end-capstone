const axios = require('axios');
require('dotenv').config();

const apiHeaders = {
  headers: {
    Authorization: `${process.env.AUTHTOKEN}`,
  },
};

exports.getQuestionList = (id, count, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}&count=${count}`, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=1011', apiHeaders)
    .then((result) => {
      callback(result.data);
    });
};

exports.getProductId = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, apiHeaders)
    .then((result) => {
      console.log('here', result.data);
      callback(result.data);
    });
};

exports.getProductsStyle = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, apiHeaders)
    .then((result) => {
      callback(result.data);
    });
};

exports.postCart = (info, callback) => {
  console.log(info);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart', {
    sku_id: info.skus,
    count: info.amount,
    size: info.size,
  }, apiHeaders)
    .then(result => {
      console.log(result.data);
    });
};

exports.getCart = (callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart', apiHeaders)
    .then(result => {
      callback(result.data);
    });
};

exports.getRevs = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, apiHeaders)
    .then((result) => {
      callback(result.data);
    });
};

const getRelatedProductIDs = (req, res) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/related`, apiHeaders);

const getRelatedInfo = (relatedResults) => relatedResults.map(
  (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`, apiHeaders),
);

exports.getRelatedProductIDs = getRelatedProductIDs;
exports.getRelatedInfo = getRelatedInfo;
exports.submitAnswer = (id, info, callback) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/answers`, {
    body: info.answer,
    name: info.nickname,
    email: info.email,
    photos: [],
  }, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results.data.results);
    });
};

exports.submitQuestion = (id, info, callback) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', {
    body: info.question,
    name: info.nickname,
    email: info.email,
    product_id: Number(id),
  }, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results.data.results);
    });
};

exports.helpfulQuestion = (id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/helpful`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results);
    });
};

exports.helpfulAnswer = (id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/helpful`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results);
    });
};

exports.reportAnswer = (id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/report`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results);
    });
};

exports.reportQuestion = (id, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/report`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results);
    });
};


exports.getReviews = (id, callback) => {
  console.log('ID IN QANDA', JSON.parse(id));
  var id = JSON.parse(id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&count=500`, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      console.log('got them reviews son')
      callback(results.data);
    }).catch(err => {
      console.log('err in qanda.js son', err);
    })
}
exports.getSortedReviews = (sortOption, id, callback) => {
  console.log('ID IN SORTED', id);
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&sort=${sortOption}&count=500`, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      console.log('got them sorted reviews son')
      callback(results.data);
    }).catch(err => {
      console.log('err in qanda.js/getsortedReviews son', err);
    })
}

exports.getMetadata = (id, callback) => {
axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${id}&`, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
  .then((results) => {
    console.log('got them metadatas son')
    callback(results.data);
  }).catch(err => {
    console.log('err in qanda.js metadata son', err);
  })
}

exports.helpfulReview = (id, callback) => {
  //add ID input functionality later

  // console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/1277974/helpful`);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/helpful`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      console.log('succ put in qanda');
      callback(results, null);
    }).catch(err => {
      callback(null, err);
    } )
};

exports.reportReview = (id, callback) => {
  //add ID input functionality later

  // console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/1277974/helpful`);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/report`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results, null);
    }).catch(err => {
      callback(null, err);
    } )
};

exports.postReview = (sendObj, callback) => {
  // sendObj.photos = [];
  console.log('SENDOBJ', sendObj)
  // var id = 37311;
  // var rating = sendObj.rating;
  // var summary = sendObj.summary;
  // var body = sendObj.body;

  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`, sendObj, apiHeaders).then(results => {
    console.log('succ post in qanda son')
    // alert('review submitted!')
    callback(null, results);

  }).catch(err => {
    callback(err, null);
    console.log('post err in qanda son', err);
  })

}
