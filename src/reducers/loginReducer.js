import { setHeaderToken } from '../services/apis/commonApi';
import { Consts, Storage, ActionTypes } from '../configs/appConfig';

const initiateState = {
    actionType: '',
    login: {
        isLoading: false,
        success: false,
        data: null,
        message: ''
    },
    logout: {
        isLoading: false,
        success: false,
        message: ''
    },
    forgot: {
        isLoading: false,
        success: false,
        message: ''
    },
    profile: {
        isLoading: false,
        data: null,
        message: ''
    },
    updateProfile: {
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
    case ActionTypes.LOGOUT_REQUEST: {
        return {
            ...state,
            logout: {
                isLoading: true,
                success: false,
                message: ''
            }
        };
    }
    case ActionTypes.LOGOUT_SUCCESSED: {
        // remove user info
        Storage.removeData(Consts.USER);

        // remove token to api
        setHeaderToken(null);

        return {
            ...state,
            logout: {
                isLoading: false,
                success: action.data.success,
                message: action.data.message
            }
        };
    }
    case ActionTypes.LOGOUT_FAILED:
        // remove user info
        Storage.removeData(Consts.USER);

        // remove token to api
        setHeaderToken(null);

        return {
            ...state,
            logout: {
                isLoading: false,
                success: false,
                message: action.message
            }
        };
        // forgot
    case ActionTypes.FORGOT_PASSWORD_REQUEST: {
        return {
            ...state,
            forgot: {
                isLoading: true,
                success: false,
                message: ''
            }
        };
    }
    case ActionTypes.FORGOT_PASSWORD_SUCCESSED: {
        return {
            ...state,
            forgot: {
                isLoading: false,
                success: action.data.success,
                message: action.data.message
            }
        };
    }
    case ActionTypes.FORGOT_PASSWORD_FAILED:
        return {
            ...state,
            forgot: {
                isLoading: false,
                success: false,
                message: action.message
            }
        };
        // profile         
    case ActionTypes.MY_PROFILE_REQUEST:
    {
        return {
            ...state,
            profile: {
                isLoading: true,
                data: null,
                message: ''
            }
        };
    }
    case ActionTypes.MY_PROFILE_SUCCESSED:
    {
        return {
            ...state,
            profile: {
                isLoading: false,
                data: action.data,
                message: action.message
            }
        };
    }
    case ActionTypes.MY_PROFILE_FAILED:
        return {
            ...state,
            profile: {
                isLoading: false,
                data: null,
                message: action.message
            }
        };
        // update profile
    case ActionTypes.UPDATE_PROFILE_REQUEST: {
        return {
            ...state,
            updateProfile: {
                isLoading: true,
                success: false,
                data: null,
                message: ''
            }
        };
    }
    case ActionTypes.UPDATE_PROFILE_SUCCESSED: {
        return {
            ...state,
            updateProfile: {
                isLoading: false,
                success: action.data.success,
                data: action.data.data,
                message: action.data.message
            }
        };
    }
    case ActionTypes.UPDATE_PROFILE_FAILED:
        return {
            ...state,
            updateProfile: {
                isLoading: false,
                success: false,
                data: null,
                message: ''
            }
        };
    default:
        return state;
    }
};
