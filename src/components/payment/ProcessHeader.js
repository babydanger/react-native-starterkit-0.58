import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import IonIcons from 'react-native-vector-icons/Ionicons';

// global
import {
    AppStyles,
    Consts,
    Storage,
    Dimens,
    Utils,
    Colors,
    HeaderUtils,
    Images,
    FlatListUtils,
    ActionTypes,
    QS,
    Configs
} from '../../configs/appConfig';

// component
import CirclePaymentProcess from '../circle/CirclePaymentProcess';
import Column from '../lines/Column';

class ProcessHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onBackPressed } = this.props;
        let link =
            Configs.BASE_URL + (this.props.avatar && this.props.avatar.startsWith('/') ? '' : '/') + this.props.avatar;
        let paddingTop = Platform.select({
            ios: 15,
            android: 0
        });
        return (
            <View style={[{ width: '100%', flexDirection: 'row', paddingTop, maxHeight: 100 }, AppStyles.bgWhite]}>
                <View style={[styles.columnOne]}>
                    <TouchableOpacity style={{ width: '100%', marginTop: 15, paddingLeft: 10 }} onPress={onBackPressed} >
                        <IonIcons name={'ios-arrow-round-back-outline'} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.columnTwo]}>
                    <Image
                        style={[styles.image, AppStyles.paddingLayoutTop]}
                        source={Utils.isNullOrUndefined(link) ? Images.bg_image : { uri: link }}
                        resizeMode={'cover'}
                    />
                    <View style={{ flex: 1 }}>
                        <Column />
                    </View>
                </View>
                <View style={[styles.columnThree]}>
                    <Text style={[AppStyles.fontContent]}>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    columnOne: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    columnTwo: {
        width: '$size_avatar_small+$padding_layout',
        alignItems: 'center',
        paddingTop: '$padding_layout'
    },
    columnThree: {
        flex: 7,
        alignItems: 'flex-start',
        justifyContent: 'center',        
        paddingTop: 25,
        paddingBottom: '$padding_layout*4',        
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        borderColor: '$color_yellow',
        borderWidth: '$border_avatar'
    }
});

ProcessHeader.propTypes = {
    avatar: PropTypes.string,
    description: PropTypes.string
};

ProcessHeader.defaultProps = {
    avatar: '/files/medias/file-1515574217491.jpg',
    description: 'Amy Mullinax started payment process Room 107 - BESARI 50 Rodley',
    onBackPressed: () => {}
};

export default ProcessHeader;
