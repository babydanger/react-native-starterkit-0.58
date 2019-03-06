import { create } from 'apisauce';
import * as Configs from '../configs';
import * as ServiceUtility from '../serviceUtility';
import RNFetchBlob from 'react-native-fetch-blob';

const API = create({
    baseURL: Configs.BASE_URL,
    timeout: Configs.API_TIMEOUT,
    headers: ServiceUtility.getHeaderFormUrlEncoded()
});

API.addRequestTransform(transform => {
    console.log('=============start-transform=============================');
    console.log(transform);
    console.log('=============end-transform=============================');
});

// Monitor API
API.addMonitor(response => {
    console.log('============================START==========================');
    console.log(response);
    console.log('============================END============================');
});

// Response Transforms
API.addResponseTransform(response => {
    console.log(response);
    // TODO: success or fail
    // http status code
});

/**
 * update header to api
 * @param {*} user
 */
export const setHeaderToken = (user) => {
    if (user) {
        API.setHeader('Authorization', `${user.token_type} ${user.access_token}`);
    } else {
        API.setHeader('Authorization', '');
    }
};

/**
 * api form data
 * @param {*} url 
 * @param {*} params 
 * @param {*} onProgress: (progress) => { }
 * @param {*} onStart: () => { }
 * @param {*} onSuccess: (data) => { } 
 * @param {*} onFail: (message, statusCode) => { } 
 */
export const apiFormData = (url, params, onProgress, onStart, onSuccess, onFail) => {
    try {
        console.log('url:', Configs.BASE_URL + url);
        console.log('data: ', params);

        // onstart listener
        if (onStart) onStart();

        // api
        RNFetchBlob.config({ timeout: Configs.FILE_TIMEOUT }).fetch('POST', Configs.BASE_URL + url, ServiceUtility.getHeaderFormUrlEncoded(), params)
            .uploadProgress({ interval: 250 }, (written, total) => {
                console.log('apiFormData ==> progress::', written / total);
                if (onProgress) onProgress(written / total);
            }).then(resp => {
                // the following conversions are done in js, it's SYNC
                console.log('apiFormData ==> resp::', resp);
                // on success listener
                if (onSuccess) onSuccess(resp.json());
            }).catch((errorMessage, statusCode) => {
                // error handling
                console.log('apiFormData ==> errorMessage::' + errorMessage + ', statusCode:: ' + statusCode);
                // on fail listener
                if (onFail) onFail(errorMessage, statusCode);
            });
    } catch (error) {
        console.log('apiFormData ==> error::', error);
    }
};

export default API;
