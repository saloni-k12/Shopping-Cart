import {createStore} from 'redux';
import {reducerCounter} from './ReducerCounter';

export const store = createStore(reducerCounter);