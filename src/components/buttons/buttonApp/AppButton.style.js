import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { AppStyles, Consts, Dimens, Utils, Colors, HeaderUtils, Images } from '../../../configs/appConfig';
export default {
    button:{
        width: 180,
        height: 25,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.COLOR_MENU_HEADER
    },
    text: {
        color: Colors.COLOR_YELLOW,
        fontSize: responsiveFontSize(2)
    }
};