import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import university from '../components/SelectUniversity/saga';

function* rootSaga() {
  yield all([fork(university)]);
}

const sagaMiddleware = createSagaMiddleware();

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default sagaMiddleware;
