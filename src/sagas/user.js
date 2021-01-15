import { put, call, takeEvery } from 'redux-saga/effects';
/* Import API */
import {getUsers} from "../api/user.js";

/**
 * getUsersRequest
 * @param payload
 * @return void
 */
export function* getUsersRequest({payload}) {
   try {
      const { data } = yield call(getUsers,payload);
      yield put({'type': 'SET_USERS', 'users': data});
   } catch (error) {
      console.log('Erreur', error);
   }
}

export default function* watchUserLoad() {
   yield takeEvery('GET_USERS_REQUEST', getUsersRequest);
   // -> takeEvery -> A chaque fois que cette action est appelée,
   // ça lance la fonction getUsersRequest
   // -> tu en as d'autres comme
   /*
         takeLatest
         takeLeading
   */
}
