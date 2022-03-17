import { GET_DATA, DATA_FETCHED_SUCCESSFUL, ERROR} from "../ReduxSaga/UserConstant";
export const getData = () => ({
    type: GET_DATA,
})
export const dataFetchedSuccessful = () => ({
    type: DATA_FETCHED_SUCCESSFUL,
    payload: users,
})
export const error = () => ({
    type: ERROR,
    payload: error,
})
