import { call, put, takeLatest } from 'redux-saga/effects';
import getRequest from '../../helpers/api';
import { FETCH_UNIVERSITY_URL } from '../../constant';
import {
  getUniversities,
  successInGettingUniversities,
  errorInGettingUniversities,
} from './reducer';

function* fetchUniversities(action) {
  try {
    const data = yield call(
      getRequest,
      `${FETCH_UNIVERSITY_URL}${action.payload}`
    );
    yield put(successInGettingUniversities(data));
  } catch (e) {
    yield put(errorInGettingUniversities(e.message));
  }
}

function* fetchUniversitiesSaga() {
  yield takeLatest(getUniversities.type, fetchUniversities);
}

export default fetchUniversitiesSaga;
