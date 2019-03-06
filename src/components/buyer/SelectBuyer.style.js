import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors } from '../../configs/appConfig';
import { Platform } from 'react-native';
export default {
    background: {
        backgroundColor: Colors.COLOR_WHITE,
        flex: 1
    },
    rootContainer: {
        paddingHorizontal: 5,
        backgroundColor: Colors.COLOR_WHITE,
        flex: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: responsiveFontSize(1.8)
    },
    searchContainer: {
        width: '100%',
        height: Platform.OS === 'ios' ? 30 : 38,
        borderRadius: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: Colors.COLOR_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    searchInput: {
        maxWidth: '90%',
        // width: '90%',
        marginLeft: 5,        
        fontSize: responsiveFontSize(1.8)
    },
    footerContainer: {
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        height: '100%',
        marginBottom: 10
    },
    footerButton: {
        height: 40,
        width: '100%'
    },
    footerButtonText: {
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    radioButton: {
        flex: 1.5
    },
    circleImage: {
        flex: 3
    },
    itemInfoContainer: {
        flex: 6,
        paddingHorizontal: 15
    },
    itemStatusContainer: {
        flex: 1.5,
        height: '100%',
        alignItems: 'flex-end',        
    },
    buyerName: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold'
    },
    buyerInfo: {
        fontSize: responsiveFontSize(1.8),
        color: 'gray'
    },
    buyerStatus: {
        fontSize: responsiveFontSize(1.8),
        color: Colors.COLOR_RED,
        fontWeight: 'bold'
    },
    emptyListContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
