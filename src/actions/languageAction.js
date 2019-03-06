import * as ActionTypes from '../configs/actionTypes';

export const changeLanguageAction = language => ({
    type: ActionTypes.LANGUAGE_ACTION,
    language
});
