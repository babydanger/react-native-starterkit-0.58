import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

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

import Line from '../../components/lines/Line';

class BuyerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rating = '';
        let thumbnail = '';
        let textStatus = AppStyles.fontColorCold;
        if (!Utils.isNullOrEmptyItems(this.props.buyer)) {
            let buyer = this.props.buyer;
            if (!Utils.isNullOrEmptyItems(buyer)) {
                thumbnail = buyer.avatar;
            }

            if (!Utils.isNullOrUndefined(thumbnail)) {
                thumbnail = Configs.BASE_URL + thumbnail;
            }
            if (buyer.rating === 1) {
                rating = 'Hot';
                textStatus = AppStyles.fontColorHot;
            } else if (buyer.rating === 2) {
                rating = 'Warm';
                textStatus = AppStyles.fontColorWarm;
            } else if (buyer.rating === 3) {
                rating = 'Cold';
                textStatus = AppStyles.fontColorCold;
            }
        }
        // console.log('==> BuyerItem thumbnail:: ', thumbnail);

        return (
            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.props.onPress(this.props.buyer)}>
                <View style={[styles.container, AppStyles.bgWhite]}>
                    <Image
                        source={!Utils.isNullOrUndefined(thumbnail) ? { uri: thumbnail } : Images.bg_image}
                        style={[AppStyles.avatarSmall]}
                    />

                    <View style={styles.columnOne}>
                        <Text style={[AppStyles.fontContent, AppStyles.fontBold]} numberOfLines={1}>
                            {!Utils.isNullOrUndefined(this.props.buyer.fullName) ? this.props.buyer.fullName : 'unknow'}
                        </Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]} numberOfLines={1}>
                            {!Utils.isNullOrUndefined(this.props.buyer.address) ? this.props.buyer.address : 'unknow'}
                        </Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]} numberOfLines={1}>
                            {this.props.buyer.gender === 0 ? 'Female' : 'Male'}
                        </Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]} numberOfLines={1}>
                            {!Utils.isNullOrUndefined(this.props.buyer.email) ? this.props.buyer.email : 'unknow'}
                        </Text>
                    </View>
                    <Text style={[AppStyles.fontDescription, textStatus]}>{rating}</Text>
                </View>
                <Line />
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'row',
        padding: '$padding_layout'
    },
    columnOne: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        paddingLeft: '$padding_content'
    },
    columnTwo: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textRed: {
        color: 'red'
    },
    textGray: {
        color: '$color_label'
    }
});

BuyerItem.propTypes = {
    onPress: PropTypes.func,
    buyer: PropTypes.object
};

BuyerItem.defaultProps = {
    onPress: buyer => {},
    buyer: {}
};

export default BuyerItem;
