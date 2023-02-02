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

const getProductsInfo = (productIDs) => productIDs.map(
  (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`, apiHeaders),
);

const getProductInfo = (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`, apiHeaders);

const getPreviewImages = (productIDs) => productIDs.map(
  (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`, apiHeaders),
);

const getPreviewImage = (productID) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`, apiHeaders);

exports.getRelatedInfo = getRelatedInfo;
exports.getRelatedProductIDs = getRelatedProductIDs;
exports.getProductInfo = getProductInfo;
exports.getProductsInfo = getProductsInfo;
exports.getPreviewImage = getPreviewImage;
exports.getPreviewImages = getPreviewImages;
