import { createStore, applyMiddleware, combineReducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { data } from '../ReduxSaga/UserSaga';



const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(data);

export default store;
 