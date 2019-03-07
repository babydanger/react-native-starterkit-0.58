import * as ActionTypes from '../configs/actionTypes';

export const setUser = user => ({
    type: ActionTypes.LOGIN_USER,
    user: user
});
