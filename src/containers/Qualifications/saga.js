import { call } from 'redux-saga/effects';

function* mySaga() {
  yield call(console.log, 'Saga');
}

export default mySaga;
