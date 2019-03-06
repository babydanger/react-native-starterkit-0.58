import * as ActionTypes from '../configs/actionTypes';

export const logoutAction = () => ({
    type: ActionTypes.LOGOUT_REQUEST
});

/**
 * @param {*} email
 */
export const forgotPasswordAction = email => ({
    type: ActionTypes.FORGOT_PASSWORD_REQUEST,
    email: email
});

/**
 * @param {*} user
 */
export const setUser = user => ({
    type: ActionTypes.LOGIN_USER,
    user: user
});
