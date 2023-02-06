module.exports = (req, res, next) => {
  console.log('method: ', req.method, 'params: ', req.params, 'at url: ', req.url);
  next();
};
