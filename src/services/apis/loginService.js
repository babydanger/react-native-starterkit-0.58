import API from '../apis/commonApi';
import * as Configs from '../configs';

export const loginFunction = params => API.post(Configs.LOGIN_URL, params);

export const forgotPasswordFunction = params => API.post(Configs.FORGOT_PASSWORD_URL, params);

export const logoutFunction = () => API.get(Configs.LOGOUT_URL);

export const changePasswordFunction = (params) => API.post(Configs.CHANGE_PASSWORD_URL, params);

export const myProfile = (sellerId) => API.get(Configs.MY_PROFILE(sellerId));

export const updateProfile = (params) => API.put(Configs.UPDATE_PROFILE(), params);
