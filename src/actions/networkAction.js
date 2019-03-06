import * as ActionTypes from '../configs/actionTypes';

export const changeNetworkAction = isConnected => ({
    type: ActionTypes.NETWORK_CHANGE_ACTION,
    isConnected
});
