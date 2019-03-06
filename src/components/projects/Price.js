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

// component
import Column from '../lines/Column';

class Price extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('namaeaada', this.props.price);
        if (!this.props.price.project) {
            return null;
        }
        return (
            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.props.onPress(this.props.price)}>
                <View style={[AppStyles.containerRow, styles.container, AppStyles.bgWhite]}>
                    <View style={[styles.columnOne, AppStyles.paddingLayoutRight]}>
                        <Text numberOfLines={1} style={[AppStyles.fontTitle]}>
                            {this.props.price.name}
                        </Text>
                    </View>

                    <Column height={'60%'} width={2} />

                    <View style={[styles.columnTwo, AppStyles.paddingLayoutLeft]}>
                        <View style={[AppStyles.containerRow]}>
                            <Image source={Images.ic_bed} style={AppStyles.iconAction} resizeMode="contain" />
                            <Text
                                style={[
                                    AppStyles.fontContent,
                                    AppStyles.paddingContentLeft,
                                    AppStyles.paddingContentRight,
                                    AppStyles.fontColorLabel
                                ]}
                            >
                                {this.props.price.bedRoom}
                            </Text>
                            <Image source={Images.ic_bathroom} style={AppStyles.iconAction} resizeMode="contain" />
                            <Text
                                style={[
                                    AppStyles.fontContent,
                                    AppStyles.paddingContentLeft,
                                    AppStyles.paddingContentRight,
                                    AppStyles.fontColorLabel
                                ]}
                            >
                                {this.props.price.bathRoom}
                            </Text>
                            <Image source={Images.ic_car} style={AppStyles.iconAction} resizeMode="contain" />
                            <Text
                                style={[
                                    AppStyles.fontContent,
                                    AppStyles.paddingContentLeft,
                                    AppStyles.paddingContentRight,
                                    AppStyles.fontColorLabel
                                ]}
                            >
                                {this.props.price.carPark}
                            </Text>
                        </View>

                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {`${I18n.t('int')}: ${this.props.price.internalSize} | ${I18n.t('ext')}: ${
                                this.props.price.externalSize
                            } | ${I18n.t('total')}: ${this.props.price.totalSize}`}
                        </Text>

                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {this.props.price.project.name}
                        </Text>
                    </View>

                    <View style={[styles.columnThree]}>
                        <Text numberOfLines={1} style={[AppStyles.fontTitle]}>
                            {this.props.price.price}
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={[
                                AppStyles.fontDescription,
                                { color: I18n.t(`price_color_${this.props.price.status}`) }
                            ]}
                        >
                            {I18n.t(`price_status_${this.props.price.status}`)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_layout'
    },
    columnOne: {
        flexDirection: 'column',
        flex: 1
    },
    columnTwo: {
        flex: 4,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    columnThree: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 2
    }
});

Price.propTypes = {
    onPress: PropTypes.func,
    price: PropTypes.shape({
        bathRoom: PropTypes.string,
        bedRoom: PropTypes.string,
        carPark: PropTypes.string,
        created_at: PropTypes.string,
        externalSize: PropTypes.number,
        id: PropTypes.number,
        internalSize: PropTypes.number,
        level: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        project: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }),
        project_id: PropTypes.number,
        property_type_id: PropTypes.number,
        roomNo: PropTypes.number,
        status: PropTypes.number,
        totalSize: PropTypes.number,
        assetsProperty: PropTypes.arrayOf(
            PropTypes.shape({
                documentType: PropTypes.string,
                link: PropTypes.string,
                type: PropTypes.string
            })
        )
    })
};

Price.defaultProps = {
    onPress: price => { },
    price: {
        bathRoom: '2.5',
        bedRoom: '4',
        carPark: '2',
        created_at: '2018-01-08T10:42:03.637Z',
        externalSize: 100,
        id: 236,
        internalSize: 500,
        level: '15',
        name: '008',
        price: 200000,
        project: {
            id: 89,
            name: 'Viettel Building'
        },
        project_id: 89,
        property_type_id: 39,
        roomNo: 12,
        status: 1,
        totalSize: 600,
        assetsProperty: {
            documentType: 'photo',
            link: '/files/medias/file-1513240914489.png',
            type: 'image'
        }
    }
};

export default Price;
