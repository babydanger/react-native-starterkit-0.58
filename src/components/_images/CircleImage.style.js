import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {
    Colors
} from '../../configs/appConfig';
export default {
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7.5   
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    text1:{
        marginTop: 5,
        maxWidth: 100,        
        fontSize: responsiveFontSize(2)
    },
    text2:{        
        maxWidth: 100,        
        fontSize: responsiveFontSize(2),
        color: Colors.COLOR_YELLOW
    }
};
