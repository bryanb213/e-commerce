import { createStore, applyMiddleware } from 'redux';
//for storage cache store or session
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './root-reducer';

//hold errors
const middlewares = [logger];

//That applies root reducer and middlewares and put in the middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//This will apply all the errors into the function as individuals

//persistant version of our store
export const persistor = persistStore(store);

export default {store, persistor};