import { AppStyles, Consts, Storage, Dimens, Utils, Colors, ActionTypes } from '../configs/appConfig';

import I18n from '../configs/i18n';

const initialState = {
    language: Consts.LANGUAGE_DEFAULT
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LANGUAGE_ACTION:
            I18n.locale = action.language;
            Storage.setData(Consts.KEY_LANGUAGE, action.language);
            return { ...state, language: action.language };
        default:
            return state;
    }
};
