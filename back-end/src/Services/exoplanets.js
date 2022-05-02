const axios = require('axios');

const api = axios.create({
  baseURL: 'https://exoplanetarchive.ipac.caltech.edu/TAP'
});

module.exports = api;
