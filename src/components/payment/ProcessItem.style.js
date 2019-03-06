import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors } from '../../configs/appConfig';
export default {
    requestBtn: {
        marginTop: 5        
    },
    text1: {
        fontSize: responsiveFontSize(2.2),
        color: Colors.COLOR_RED
    },
    text2: {
        fontSize: responsiveFontSize(1.8),
        color: Colors.COLOR_GRAY
    }
};