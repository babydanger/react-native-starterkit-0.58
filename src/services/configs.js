import * as Consts from '../configs/consts';

// timeout
export const API_TIMEOUT = 30 * 1000; // 30 seconds
export const FILE_TIMEOUT = 2 * 60 * 1000; // 2 minutes

// url
export const BASE_URL = 'http://13.229.60.66';

// auth
export const LOGIN_URL = '/auth/login';
export const LOGOUT_URL = '/auth/logout';

// accounts
export const FORGOT_PASSWORD_URL = '/accounts/forgot-password';
export const CHANGE_PASSWORD_URL = '/accounts/change-password';

/**
 * project list
 * @param {*} offset
 * @param {*} filterValue
 * @param {*} priceMin
 * @param {*} priceMax
 * @param {*} bathRoom
 * @param {*} bedRoom
 * @param {*} projectType
 */
export const PROJECT_LIST_URL = (offset, filterValue, priceMin, priceMax, bathRoom, bedRoom, projectType, projectStatus) => `/projects?start=${offset}&limit=${Consts.LIMIT}`
    + `&filter=[{"operator":"eq","value":"${projectStatus}","property":"status"},{"operator":"iLike","value":["${filterValue}"],"property":"name"}]`
    + `&filterProperty={"priceMin":"${priceMin}","priceMax":"${priceMax}","bathRoom":"${bathRoom}",`
    + `"bedRoom":"${bedRoom}","projectType":"${projectType}"}`;


/**
 * my project
 * @param {*} offset
 */
export const MY_PROJECT = (offset) => `/projects/my-project?start=${offset}&limit=${Consts.LIMIT}`;

/**
 * project details
 * @param {*} id
 */
export const PROJECT_DETAILS = id => `/projects/${id}`;

/**
 * documents
 * @param {*} projectId
 * @param {*} offset
 */
export const DOCUMENTS = (filter, projectId, offset) =>
    `/assets/${projectId}/list-documents?start=${offset}&limit=${Consts.LIMIT}`;

/**
 * prices
 * @param {*} filter
 * @param {*} projectId
 * @param {*} offset
 */
export const PRICES = (filter, projectId, offset) => {
    var filterURL = [];
    var filterProperty = {};
    filterProperty.operator = 'eq';
    console.log('sakndnasjndafewfadsfads', filter);
    if (filter.bedRoom != '') {
        var bedRoom = filterProperty;
        bedRoom.value = JSON.stringify(filter.bedRoom);
        bedRoom.property = 'bedRoom';
        filterURL.push(bedRoom);
    }
    if (filter.bathRoom != '') {
        var bathRoom = filterProperty;
        bathRoom.value = JSON.stringify(filter.bathRoom);
        bathRoom.property = 'bathRoom';
        filterURL.push(bathRoom);
    }
    if (filter.propertytatus != '') {
        var status = filterProperty;
        status.value = JSON.stringify(filter.propertytatus);
        status.property = 'status';
        filterURL.push(status);
    }
    if (filter.aspect != '') {
        var aspect = filterProperty;
        aspect.value = JSON.stringify(filter.aspect);
        aspect.property = 'aspect';
        filterURL.push(aspect);
    }
    return (
        `/properties/price-list/${projectId}?start=${offset}&limit=10&filter=${JSON.stringify(filterURL)}`
    );

};

/**
 * next appointment
 */
export const SELLREQUEST = () => '/sale-projects';
export const BUYER_REGISTRATION = () => '/buyer-registrations';


export const NEXT_APPOINTMENT = () => '/appointments/next-appointment';

/**
 * config
 */
export const CONFIG_COMMON = () => '/common-config-app';
export const PROPERTY_TYPE_LIST = () => '/property-types/lists';
export const PROJECT_TYPE = () => '/project-types/lists';

/**
 * get list buyer
 * @param {*} page
 * @param {*} value
 */
export const BUYER_CUSTOM_LIST_URL = (offset, value) => `/buyer-customs?start=${offset}&limit=${Consts.LIMIT}`
    + `&searches=[{"property":"fullName","operator":"iLike","value":"${value}"},`
    + `{"property":"email","operator":"iLike","value":"${value}"},`
    + `{"property":"phone","operator":"iLike","value":"${value}"}]`;

/**
 * get buyer detail
 * @param {*} id
 */
export const BUYER_CUSTOM_DETAIL = id => `/buyer-customs/${id}`;

export const BUYER_FOR_PROJECT = projectId => `/buyer-customs/list-buyers-project/${projectId}`;

export const CREATE_REQUEST_PAYMENT = () => '/request-payments';

export const PROPERTY_DETAIL = propertyId => `/properties/${propertyId}`;

/**
 * get list countries
 */
export const COUNTRIES_LIST = () => '/countries';

/**
 * get state by country
 * 
 * @param {*} id 
 */
export const STATE_BY_COUNTRY = (id) => `/countries/${id}`;

/**
 * post upload file media
 *  
 */
export const UPLOAD_MEDIA = () => '/upload/media';

/**
 * create new buyer
 *  
 */
export const CREATE_NEW_BUYER = () => '/buyers';
/*
 * get seller detail
 * @param {*} sellerId 
 */
export const SELLER_DETAIL = (sellerId) => `/sales/${sellerId}`;

/**
 * get agent detail
 */
export const AGENT_DETAIL = (agentId) => `/agents/${agentId}`;

/**
 * create new buyer custom
 */
export const CREATE_NEW_BUYER_CUSTOM = () => '/buyer-customs';

/**
 * my profile
 */
export const MY_PROFILE = (sellerId) => `/seller/detail/${sellerId}`;


/**
 * put
 * edit buyer custom
 */
export const EDIT_BUYER_CUSTOM = (buyerId) => `/buyer-customs/${buyerId}`;

export const COUNTRIES = () => '/countries';

export const COUNTRY_STATE = (countryId) => `/countries/${countryId}`;

// update profile
export const UPDATE_PROFILE = () => '/accounts/profile';