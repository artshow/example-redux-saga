import { getRequest } from './env/request.js';

/**
 * getUsers
 * @method GET
 * @param params
 * @return payload
 */
export const getUsers = (params) => {
   return getRequest().get('/users/').then((response) => {
      let { data } = response;
      return data;
   }).catch((error) => {
      throw error;
   });
}
