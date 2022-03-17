import { GET_DATA, DATA_FETCHED_SUCCESSFUL, ERROR } from '../ReduxSaga/UserConstant';

const INITIAL_STATE = {
    loading: false,
    users: [],
    errors: null,
};
const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_DATA:
            return { ...state, loading: true,};       
        case DATA_FETCHED_SUCCESSFUL:
            return { ...state, loading: false, users: action.payload};
        case ERROR:
            return { ...state, loading: false, users: action.payload};
        default: 
            return state;
    }
};
export default reducers;