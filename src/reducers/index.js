import { combineReducers } from 'redux';

/* IMPORTS REDUCERS */
import user from './user.js';

const rootReducer = combineReducers({
   user
});

export default rootReducer;
