import { Dimensions } from 'react-native';
import moment from 'moment';
import I18n from 'react-native-i18n';
import ImagePicker from 'react-native-image-picker';
import { apiFormData } from '../services/apis/commonApi';
import RNFetchBlob from 'react-native-fetch-blob';
// global
import { Consts, Utils } from './appConfig';

/**
 * @param {*} param
 */
export const isNullOrUndefined = param => {
    return param === null || param === undefined || param === '' || param.length <= 0 ? true : false;
};

/**
 * @param {*} param
 */
export const isNullOrEmptyItems = param => {
    return param === null || param === undefined || param.length <= 0 ? true : false;
};

/**
 * url.js encode
 * @param {*} data
 */
export const urlEncode = data => {
    return data ? Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&') : '';
};

/**
 * screen type (1x, 2x, 3x)
 */
export const isScreenType = () => {
    let { width } = Dimensions.get('window');

    if (width <= 350) {
        return Consts.SCREEN_1X;
    } else if (width > 350 && width <= 500) {
        return Consts.SCREEN_2X;
    } else {
        return Consts.SCREEN_3X;
    }
};

/**
 * get size for screen type
 * @param {*} size
 */
export const getDimens = size => isScreenType() * size;

/**
 * @param {*} dateTime
 */
export const formatDate = dateTime => {
    try {
        if (dateTime) return moment(dateTime, Consts.FORMAT_DATE_TIME).format(Consts.FORMAT_DATE);
    } catch (error) {
        console.log(error);
    }

    return '';
};

/**
 * @param {*} dateTime
 */
export const formatDateTime = dateTime => {
    try {
        if (dateTime) return moment(dateTime, Consts.FORMAT_DATE_TIME).format(Consts.FORMAT_DATE_TIME_TEXT);
    } catch (error) {
        console.log(error);
    }

    return '';
};

/**
 * @param {*} path
 */
export const getExtension = (path) => {
    let result = '';

    try {
        console.log('getExtension::path::', path);
        if (isNullOrUndefined(path)) return result;

        let values = path.split('.');
        if (isNullOrEmptyItems(values)) return result;

        result = values[values.length - 1];
    } catch (error) {
        console.log('getExtension:: error:: ' + error);
    }

    return result;
};

export function getHourMinuteFromMinutes(min) {
    if (min) {
        let hour = Math.floor(min / 60).toString();
        let minute = Math.floor(min % 60).toString();

        let display = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute);

        return display;
    }

    return '';
}

/**
 * valid image
 * @param {*} path 
 */
export const isValidImageType = (path) => {
    const fileType = getExtension(path).toLowerCase();
    if (isNullOrUndefined(fileType)) return false;
    return fileType === 'jpeg' || fileType === 'jpg' || fileType === 'png';
};

/**
 * valid file
 * @param {*} path 
 */
export const isValidFileType = (path) => {
    const fileType = getExtension(path).toLowerCase();
    if (isNullOrUndefined(fileType)) return false;
    return fileType === 'jpeg' || fileType === 'jpg' || fileType === 'png'
        || fileType === 'pdf' || fileType === 'mp3' || fileType === 'mp4';
};

/**
 * is pdf
 * @param {*} path 
 */
export const isPdf = (path) => {
    const fileType = getExtension(path).toLowerCase();
    if (isNullOrUndefined(fileType)) return false;

    return fileType === 'pdf';
};

/**
 * check response
 * @param {*} res 
 * @param {*} onSuccess 
 * @param {*} onFail 
 */
export const checkResponse = (res, onSuccess, onFail) => {
    if (res.success) {
        return onSuccess(res.data);
    }
    return onFail(res.message);
};

export function transformCountriesIntoModalData(arr) {
    if (arr) {
        let modalData = [];
        for (let item of arr) {
            modalData.push({ key: item.id, label: item.name });
        }
        return modalData;
    }

    return [];
}

/**
 * option image picker
 * @param {*} isAvatar 
 */
export const optionImagePicker = (isAvatar) => {
    let options = {
        title: I18n.t('select_avatar'),
        takePhotoButtonTitle: I18n.t('take_photo'),
        chooseFromLibraryButtonTitle: I18n.t('choose_photo'),
        cancelButtonTitle: I18n.t('cancel'),
        mediaType: 'photo',
        quality: 1.0,
        storageOptions: { skipBackup: true, path: 'images' }
    };

    if (isAvatar) {
        options['maxHeight'] = 200;
        options['maxWidth'] = 200;
    }

    return options;
};

/**
 * on image picker
 * @param {*} isAvatar 
 */
export const onImagePicker = (isAvatar, callback) => {
    try {
        ImagePicker.showImagePicker(optionImagePicker(isAvatar), (response) => {
            console.log('onImagePicker::Image Response::', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // result
                const result = {
                    uri: response.uri, path: response.path, fileName: response.fileName,
                    base64File: response.data, type: response.type,
                    pathUploaded: ''
                };
                console.log('onImagePicker::result::', result);
                if (callback) callback(result);
            }
        });
    } catch (error) {
        console.log('onImagePicker::error::', error);
    }
};

/**
 * 
 * @param {*} result 
 * @param {*} onProgress: (progress) => { }
 * @param {*} onStart: () => { }
 * @param {*} onSuccess: (data) => { }
 * @param {*} onFail: (message) => { }
 */
export const uploadMedia = (result, onProgress, onStart, onSuccess, onFail) => {
    try {
        console.log('UploadMedia::Result::', result);
        if (isValidImageType(result.fileName)) {
            apiFormData('/upload/media', [{
                name: 'file',
                type: `image/${getExtension(result.fileName)}`,
                filename: result.fileName,
                data: RNFetchBlob.wrap(result.uri),
            }], onProgress, onStart, (res) => {
                if (res) {
                    if (res.success) {
                        if (onSuccess) { onSuccess(res.data); }
                    } else {
                        if (onFail) { onFail(res.message); }
                    }
                } else {
                    if (onFail) { onFail(I18n.t('something_wrong')); }
                }
            }, (message, status) => {
                if (onFail) { onFail(message); }
            });
        } else {
            console.log('UploadMedia::Invalid Format::Server not support this format');
            if (onFail) { onFail(I18n.t('file_not_support')); }
        }
    } catch (error) {
        console.log('UploadMedia::Error::', error);
    }
};