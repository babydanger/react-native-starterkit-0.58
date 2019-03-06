import * as ActionTypes from '../configs/actionTypes';

const initiateState = {
    isConnected: true
};

export default (state = initiateState, action) => {
    switch (action.type) {
        case ActionTypes.NETWORK_CHANGE_ACTION:
            return { ...state, isConnected: action.isConnected };
        default:
            return state;
    }
};
