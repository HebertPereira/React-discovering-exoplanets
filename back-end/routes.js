const express = require('express');
const routes = express.Router();

const api = require('./src/Services/exoplanets');

routes.get(`/exoplantes`, async (request, response) => {
  const { data } = await api.get('/sync', {
    params: {
      query:
        'select pl_name, hostname, tic_id, disc_year, discoverymethod, disc_telescope from pscomppars',
      format: 'json'
    }
  });
  const sortForDate = (data, type = 'asc') => {
    const result = data.sort(
      (item_1, item_2) => item_1.disc_year - item_2.disc_year
    );
    if (type === 'asc') {
      return result.reverse();
    } else {
      return result;
    }
  };
  return response.status(200).json({ data: sortForDate(data) });
});

module.exports = routes;
