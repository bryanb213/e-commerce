import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//hold errors
const middlewares = [logger];

//That applies root reducer and middlewares and put in the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//This will apply all the errors into the function as individuals

export default store;