const axios = require('axios');
require('dotenv').config();

const apiHeaders = {
  headers: {
    Authorization: `${process.env.AUTHTOKEN}`,
  },
};

exports.getQuestionList = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}`, apiHeaders)
    .then((results) => {
      callback(results.data.results);
    });
};

exports.getProducts = (callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=1011', apiHeaders)
    .then((result) => {
      callback(result.data);
    });
};

exports.getProductId = (callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311`, apiHeaders)
    .then((result) => {
      console.log('here', result.data);
      callback(result.data);
    });
};

exports.getProductsStyle = (callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles`, apiHeaders)
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