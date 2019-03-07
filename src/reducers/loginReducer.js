import { setHeaderToken } from '../services/apis/commonApi';
import { Consts, Storage, ActionTypes } from '../configs/appConfig';

const initiateState = {
    actionType: '',
    login: {
        isLoading: false,
        success: false,
        data: null,
        message: ''
    }
};

export default (state = initiateState, action) => {
    state.actionType = action.type;
    switch (action.type) {
    // set user
    case ActionTypes.LOGIN_USER: {
        // save user info
        Storage.setDataJson(Consts.USER, action.user);

        // add token to api
        setHeaderToken(action.user);

        return {
            ...state,
            login: {
                isLoading: false,
                success: true,
                data: action.user,
                message: ''
            }
        };
    }
    // login
    case ActionTypes.LOGIN_REQUEST: {
        return {
            ...state,
            login: {
                isLoading: true,
                success: false,
                data: null,
                message: ''
            }
        };
    }
    case ActionTypes.LOGIN_SUCCESSED: {
        let user = action.data.success ? action.data.data : null;

        // save user info
        Storage.setDataJson(Consts.USER, user);

        // add token to api
        setHeaderToken(user);

        return {
            ...state,
            login: {
                isLoading: false,
                success: action.data.success,
                data: user,
                message: action.data.message
            }
        };
    }
    case ActionTypes.LOGIN_FAILED:
        // clear user info
        Storage.removeData(Consts.USER);

        // remove token at api
        setHeaderToken(null);

        return {
            ...state,
            login: {
                isLoading: false,
                success: false,
                data: null,
                message: action.message
            }
        };
        // logout
    default:
        return state;
    }
};
