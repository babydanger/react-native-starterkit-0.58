import { /*put, takeEvery,*/ all } from 'redux-saga/effects';
import loginSagas from '../sagas/loginSagas';

export default function* rootSagas() {
    yield all([
        loginSagas(),
    ]);
}
