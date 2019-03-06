import { Dimensions } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Consts, Colors, Dimens } from '../../configs/appConfig';

const { width, height } = Dimensions.get('window');

export default {
    rootContainer: {
        width: width,
        paddingVertical: Dimens.PADDING_LAYOUT,
        paddingHorizontal: Dimens.PADDING_LAYOUT,
        backgroundColor: 'white'
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        color: 'black',
        paddingLeft: 10
    },
    headerViewAllBtn: {
        backgroundColor: 'transparent',
        paddingHorizontal: 5
    },
    headerViewAllText: {
        color: Colors.COLOR_YELLOW,
        fontSize: responsiveFontSize(1.8)
    },
    buyerList: {
        marginTop: 10
    },
    footerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    footerBtn: {
        width: 180,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        backgroundColor: Colors.COLOR_MENU_HEADER
    },
    footerBtnText: {
        fontSize: responsiveFontSize(2),
        color: Colors.COLOR_YELLOW,
        fontWeight: 'bold'
    }
};
