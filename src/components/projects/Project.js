import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

import {
    AppStyles,
    Consts,
    Dimens,
    Utils,
    Images,
    Configs
} from '../../configs/appConfig';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let thumbnail = '';
        if (!Utils.isNullOrEmptyItems(this.props.project.assets)) {
            let assets = this.props.project.assets.filter(n => n.type === Consts.ASSET_TYPE_THUMBNAIL);
            if (!Utils.isNullOrEmptyItems(assets)) {
                thumbnail = assets[0].link;
            }

            if (!Utils.isNullOrUndefined(thumbnail)) {
                thumbnail = Configs.BASE_URL + thumbnail;
            }
        }

        return (
            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.props.onPress(this.props.project)}>
                <View style={[AppStyles.containerRow]}>
                    <View
                        style={[
                            styles.container,
                            AppStyles.bgWhiteRadius,
                            AppStyles.marginLayoutLeft,
                            AppStyles.marginLayoutTop,
                            AppStyles.marginLayoutRight,
                            AppStyles.paddingContent
                        ]}>
                        <View style={[styles.columnOne]}>
                            <View style={[AppStyles.image, styles.image]}>
                                <Image
                                    source={Images.bg_image}
                                    style={[AppStyles.image, styles.image]}
                                    borderRadius={Dimens.RADIUS_BG}
                                />
                                <Image
                                    source={!Utils.isNullOrUndefined(thumbnail) ? { uri: thumbnail } : Images.bg_image}
                                    style={[AppStyles.image, styles.image, { position: 'absolute' }]}
                                    borderRadius={Dimens.RADIUS_BG}
                                />
                            </View>
                            <Text
                                numberOfLines={1}
                                style={[
                                    AppStyles.fontBadget,
                                    styles.button,
                                    AppStyles.bgWhiteRadius,
                                    AppStyles.bgRed,
                                    AppStyles.fontColorWhite
                                ]}
                            >
                                {this.props.project.projectType.name}
                            </Text>
                        </View>
                        <View style={[styles.columnTwo, AppStyles.paddingContent]}>
                            <Text numberOfLines={1} style={[AppStyles.fontContent, AppStyles.fontBold]}>
                                {this.props.project.name}
                            </Text>
                            <Text numberOfLines={2} style={[AppStyles.fontContent, AppStyles.fontColorLabel]}>
                                {`${this.props.project.address}${Utils.isNullOrUndefined(this.props.project.city) ? '' : ', '
                                    + this.props.project.city}${this.props.project.state && !Utils.isNullOrUndefined(this.props.project.state.name) ? ', '
                                        + this.props.project.state.name : ''}${Utils.isNullOrUndefined(this.props.project.postcode) ? '' : ', '
                                            + this.props.project.postcode}${this.props.project.country && !Utils.isNullOrUndefined(this.props.project.country.name) ? ', '
                                                + this.props.project.country.name : ''}`}
                            </Text>
                            <View style={[AppStyles.containerRow, AppStyles.marginContentTop]}>
                                <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                                    {`${I18n.t('available')}: `}
                                </Text>
                                <Text style={[AppStyles.fontDescription, AppStyles.fontColorYellow]}>
                                    {this.props.project.propertyData.totalSell}
                                </Text>
                                <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                                    {`/${this.props.project.propertyData.totalProperties}`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {},
    button: {
        alignSelf: 'center',
        position: 'absolute',
        width: '$size_image_width-40',
        bottom: 0,
        textAlign: 'center',
        padding: '$padding_small',
        overflow: 'hidden'
    },
    columnOne: {
        marginRight: '$padding_layout',
        paddingBottom: '$padding_layout'
    },
    columnTwo: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

Project.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        projectType: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }),
        assets: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                type: PropTypes.string
            })
        ),
        propertyData: PropTypes.shape({
            totalProperties: PropTypes.number,
            totalSell: PropTypes.number
        })
    }),
    onPress: PropTypes.func
};

Project.defaultProps = {
    project: {
        name: 'Project for Michael',
        address: 'Hà Giang',
        projectType: {
            id: 11,
            name: 'New Land Developement Sites'
        },
        assets: [
            {
                link: '/files/medias/file-1515574217491.jpg',
                type: 'thumbnail'
            },
            {
                link: '/files/medias/file-1515574217491.jpg',
                type: 'image'
            }
        ],
        propertyData: {
            totalProperties: 1,
            totalSell: 1
        }
    },
    onPress: project => { }
};

export default Project;
