import { call, put, takeLatest } from 'redux-saga/effects';
import * as LoginService from '../apis/loginService';
import * as ActionTypes from '../../configs/actionTypes';
import * as ServiceUtility from '../serviceUtility';
import QS from 'qs';

function* login(params) {
    try {
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.loginFunction, QS.stringify(params)));
        if (status) {
            yield put({ type: ActionTypes.LOGIN_SUCCESSED, data: data });
        } else {
            yield put({ type: ActionTypes.LOGIN_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.LOGIN_FAILED, message: error.message });
    }
}

function* loginSagas() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
}

// export
export default loginSagas;
