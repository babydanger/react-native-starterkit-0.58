import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationActions } from 'react-navigation';
import I18n from 'react-native-i18n';

// global resources
import { AppStyles, Consts, Storage, Dimens, Utils, Colors, HeaderUtils, Images } from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';

class SplashContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <ExtContainer>
                <View style={styles.container}>
                    <Image source={Images.ic_logo} style={styles.imageLogo} resizeMode="stretch" />
                    <Text style={[AppStyles.fontTitle, AppStyles.marginLayout, styles.text]}>{I18n.t('welcome')}</Text>
                </View>
            </ExtContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imageLogo: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        bottom: '$padding_layout',
        padding: '$padding_layout'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(SplashContainer);
