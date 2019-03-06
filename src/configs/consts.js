import * as Dimens from './dimens';
import I18n from 'react-native-i18n';

export const DELAY_USERACTION = 600;

// screen type
export const SCREEN_1X = Dimens.SCALE_1X;
export const SCREEN_2X = Dimens.SCALE_2X;
export const SCREEN_3X = Dimens.SCALE_3X;

// language
export const LANGUAGE_ENGLISH = 'en';
export const LANGUAGE_CHINA = 'zh';
export const LANGUAGE_VIETNAM = 'vi';
export const LANGUAGE_DEFAULT = LANGUAGE_ENGLISH;

// date time
export const FORMAT_DATE_TIME = 'YYYY-MM-DDTHH:mm:ssZ';
export const FORMAT_DATE_TIME_TEXT = 'MMM DD, YYYY hh:mm A';
export const FORMAT_DATE = 'DD/MM/YYYY';
export const FORMAT_YEAR_MONTH_DAY = 'YYYY-MM-DD';

// key AsyncStore
export const KEY_USER_NAME = 'key_user_name';
export const KEY_USER_PASSWORD = 'key_password';
export const USER = 'user';
export const TOKEN = 'token';
export const TOKEN_TYPE = 'token_type';
export const ACCOUNT_ID = 'account_id';
export const KEY_LANGUAGE = 'key_language';
export const CONFIG_COMMON = 'config_common';
export const PROPERTY_TYPES = 'property_types';

// asset type
export const ASSET_TYPE_DOCUMENT = 'document';
export const ASSET_TYPE_THUMBNAIL = 'thumbnail';
export const ASSET_TYPE_IMAGE = 'image';
export const ASSET_TYPE_YOUTUBE = 'youtube';
export const ASSET_TYPE_360 = 'virtual_tour';
export const ASSET_TYPE_PHOTO = 'photo';

// walk through
export const WALK_THROUGH = 'walk_through';

// paging
export const LIMIT_NUMBER = 20;
export const LIMIT = `${LIMIT_NUMBER}`;

// package name
export const PACKAGE_NAME = 'IWD666';

// price status
export const PRICE_STATUS_INACTIVE = 4;
export const PRICE_STATUS_AVAILABLE = 3;
export const PRICE_STATUS_RESERVED = 2;
export const PRICE_STATUS_UNCONDITIONAL_EXCHANGES = 1;
export const PRICE_STATUS_SETTLED = 5;

export const SALE_PROJECT_PENDING = 0;
export const SALE_PROJECT_APPROVED = 1;
export const SALE_PROJECT_REJECTED = 2;

export const ASPECTS = {
    n: 'North',
    ne: 'Northeast',
    e: 'East',
    se: 'Southeast',
    s: 'South',
    sw: 'Southwest',
    w: 'West',
    nw: 'Northwest'
};
