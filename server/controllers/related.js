const axios = require('axios');
require('dotenv').config();

const apiHeaders = {
  headers: {
    Authorization: `${process.env.AUTHTOKEN}`,
  },
};

const getRelatedProductIDs = (req, res) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/related`, apiHeaders);

const getRelatedInfo = (relatedResults) => relatedResults.map(
  (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`, apiHeaders),
);

exports.getRelatedProductIDs = getRelatedProductIDs;
exports.getRelatedInfo = getRelatedInfo;
