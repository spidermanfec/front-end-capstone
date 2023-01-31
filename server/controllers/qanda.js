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

exports.submitAnswer = (id, info, callback) => {
  console.log('TESTING SUBMIT', id, info);
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

