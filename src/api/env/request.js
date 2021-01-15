import axios from 'axios';
import Env from './index.js';

export const getRequest = () => {
   return axios.create({
      baseURL: Env.getUrlApi(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth': '*'
      }
   });
}
