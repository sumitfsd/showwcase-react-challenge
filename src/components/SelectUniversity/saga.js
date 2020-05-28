import { call, put, takeEvery } from 'redux-saga/effects';
import { getRequest } from '../../helpers/api';
import {FETCH_UNIVERSITY_URL} from '../../constant'
import { getUniversities, successInGettingUniversities, errorInGettingUniversities } from './reducer';

function* fetchUniversities(action) {
   try {
      const data = yield call(getRequest, `${FETCH_UNIVERSITY_URL}${action.payload}`);
      yield put({ type: successInGettingUniversities.type, payload: { data }});
   } catch (e) {
      yield put({ type: errorInGettingUniversities.type, payload: e.message });
   }
}

function* fetchUniversitiesSaga() {
  yield takeEvery(getUniversities.type, fetchUniversities);
}

export default fetchUniversitiesSaga;