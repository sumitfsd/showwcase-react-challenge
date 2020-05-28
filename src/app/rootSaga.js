import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import homePage from '../containers/Homepage/saga';
import university from '../components/SelectUniversity/saga'
import qualification from '../containers/Qualifications/saga'

function* rootSaga() {
  yield all(
    [
      fork(homePage),
      fork(university),
      fork(qualification),
    ]
  );
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;
