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

function* logout() {
    try {
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.logoutFunction));
        if (status) {
            yield put({ type: ActionTypes.LOGOUT_SUCCESSED, data: data });
        } else {
            yield put({ type: ActionTypes.LOGOUT_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.LOGOUT_FAILED, message: error.message });
    }
}

function* forgotPassword(params) {
    try {
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.forgotPasswordFunction, QS.stringify(params)));
        if (status) {
            yield put({ type: ActionTypes.FORGOT_PASSWORD_SUCCESSED, data: data });
        } else {
            yield put({ type: ActionTypes.FORGOT_PASSWORD_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.FORGOT_PASSWORD_FAILED, message: error.message });
    }
}

function* changePassword(params) {
    try {
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.changePasswordFunction, QS.stringify(params)));
        if (status) {
            yield put({ type: ActionTypes.CHANGE_PASSWORD_SUCCESSED, data: data });
        } else {
            yield put({ type: ActionTypes.CHANGE_PASSWORD_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.CHANGE_PASSWORD_FAILED, message: error.message });
    }
}

function* myProfile(params) {
    const { sellerId } = params;
    try {
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.myProfile, sellerId));
        if (status) {
            yield put({ type: ActionTypes.MY_PROFILE_SUCCESSED, data: data, message: message });
        } else {
            yield put({ type: ActionTypes.MY_PROFILE_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.MY_PROFILE_FAILED, message: error.message });
    }
}

function* updateProfile(params) {
    try {
        console.log('params 2323', params);
        const { status, data, message } = ServiceUtility.processResponseService(yield call(LoginService.updateProfile, QS.stringify(params)));
        if (status && data && data.success) {
            yield put({ type: ActionTypes.UPDATE_PROFILE_SUCCESSED, data: data });
        } else {
            yield put({ type: ActionTypes.UPDATE_PROFILE_FAILED, message: message });
        }
    } catch (error) {
        yield put({ type: ActionTypes.UPDATE_PROFILE_FAILED, message: error.message });
    }
}

function* loginSagas() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
    yield takeLatest(ActionTypes.LOGOUT_REQUEST, logout);
    yield takeLatest(ActionTypes.FORGOT_PASSWORD_REQUEST, forgotPassword);
    yield takeLatest(ActionTypes.CHANGE_PASSWORD_REQUEST, changePassword);
    yield takeLatest(ActionTypes.MY_PROFILE_REQUEST, myProfile);
    yield takeLatest(ActionTypes.UPDATE_PROFILE_REQUEST, updateProfile);
}

// export
export default loginSagas;
