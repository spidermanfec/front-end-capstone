const axios = require('axios');
require('dotenv').config();

exports.getQuestionList = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}`, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results.data.results);
    });
};

exports.helpfulQuestion = (id, callback) => {
  console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/helpful`);
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
  console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/helpful`);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/helpful`, {}, {
    headers: {
      Authorization: `${process.env.AUTHTOKEN}`,
    },
  })
    .then((results) => {
      callback(results);
    });
};
