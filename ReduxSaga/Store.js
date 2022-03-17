import { combineReducers } from "redux";
import reducers from '../ReduxSaga/UserReducer';

const store = combineReducers({
    user: reducers,
});

export default store;