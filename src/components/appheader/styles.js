import { Platform } from 'react-native';
import { Colors } from '../../configs/appConfig';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import { fonts } from '../../utils/constants';

export default {
    navTitleContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 15 : 0,
        bottom: 0,
        left: 0,
        right: 0,        
        justifyContent: 'center',
        alignItems: 'center',    
        flexDirection: 'row'    
    },
    navTitle: {
        // fontFamily: fonts.defaultFont,
        fontSize: responsiveFontSize(2.4),
        color: Colors.COLOR_YELLOW,   
        flex: 2,        
    },
    searchBar: {
        // fontFamily: fonts.defaultFont,
        height: 40,
        marginBottom: 0,
        paddingBottom: 0
    },
    headerFont: {
        // fontFamily: fonts.defaultFont,/
        fontSize: 16,
        color: 'white'
    },
    searchHeaderLeftContainer: {
        flex: 1
    },
    searchBarRightContainer: {
        flex: 1.8,
        justifyContent: 'center'
    },
    searchBarContentContainer: {
        flex: 8,
        borderRadius: 10
    },
    searchInput: {
        // fontFamily: fonts.defaultFont,
        height: 40,
        marginBottom: 0,
        paddingBottom: 0
    },
    iconLeft: {
        marginLeft: 4
    },
    iconRight: {
        marginRight: 4
    },
    buttonContent: {
        alignItems: 'flex-start'
    }
};
