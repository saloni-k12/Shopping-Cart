import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_DATA, DATA_FETCHED_SUCCESSFUL, ERROR } from '../ReduxSaga/UserConstant';
import {getData, dataFetchedSuccessful, error} from '../ReduxSaga/UserAction';
import { Api } from '../ReduxSaga/Api';

function* getUser() {
  try {
        const response = yield call(Api);
        yield put(dataFetchedSuccessful(responce.data));
    } catch (error) {
        yield put(error(error));
  }
}
export default function* data()  {
  yield takeLatest(GET_DATA, getUser);
}
