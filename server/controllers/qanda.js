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
