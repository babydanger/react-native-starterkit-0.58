import API from '../apis/commonApi';
import * as Configs from '../configs';

export const loginFunction = params => API.post(Configs.LOGIN_URL, params);