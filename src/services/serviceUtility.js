import I18n from 'react-native-i18n';

/**
 * response {
 ** data - the object originally from the server that you might wanna mess with duration - the number of milliseconds
 ** problem - the problem code (see the bottom for the list)
 ** ok - true or false
 ** status - the HTTP status code
 ** headers - the HTTP response headers
 ** config - the underlying axios config for the request
 ** }
 * @param {*} response
 */
export const processResponseService = response => ({
    status: response.ok,
    data: response.data,
    message: response.status ? I18n.t(response.status + '') : response.problem    
});

/**
 * get form data from params
 * @param {*} params
 */
export const getFormData = params => {
    const formDatas = new FormData();
    Object.keys(params).forEach(key => formDatas.append(key, params[key]));
    return formDatas;
};

/**
 * get header for url encoded
 */
export const getHeaderFormUrlEncoded = () => ({
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
});

/**
 * get header for application json
 */
export const getHeaderApplicationJson = () => ({
    'Content-Type': 'application/json;charset=UTF-8'
});
