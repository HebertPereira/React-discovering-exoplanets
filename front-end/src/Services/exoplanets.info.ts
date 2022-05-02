/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { AxiosError, AxiosResponse } from 'axios';

import api from './api';

export const getExplanetsData = () => {
  return api
    .get('/exoplantes')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return console.error(error);
    });
};
