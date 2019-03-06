import I18n from 'react-native-i18n';
import en from '../configs/locales/en';
import zh from '../configs/locales/zh';
import * as Consts from '../configs/consts';

I18n.fallbacks = true;
I18n.translations = { en, zh };
I18n.locale = Consts.LANGUAGE_DEFAULT;

export default I18n;
