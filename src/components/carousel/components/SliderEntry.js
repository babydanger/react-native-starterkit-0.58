import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import I18n from 'react-native-i18n';

import styles from '../styles/SliderEntry.style';

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
} from '../../../configs/appConfig';

class SliderEntry extends Component {
    get image() {
        const { data: { link }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: Configs.BASE_URL + link }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image source={{ uri: Configs.BASE_URL + link }} style={styles.image} />
        );
    }

    render() {
        const { data: { type } } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.slideInnerContainer}
                onPress={() => this.props.onPress()}
            >
                <View style={[styles.imageContainer]}>
                    {type === Consts.ASSET_TYPE_IMAGE && (
                        <View
                            style={[
                                styles.imageContainer,
                                {
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: Dimens.RADIUS
                                }
                            ]}
                        >
                            <Image source={Images.ic_image} />
                            <Text style={[AppStyles.fontContent]}>{I18n.t('no_image')}</Text>
                        </View>
                    )}
                    {type === Consts.ASSET_TYPE_IMAGE && (
                        <View
                            style={[
                                styles.imageContainer,
                                {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            ]}
                        >
                            {this.image}
                        </View>
                    )}
                    {type === Consts.ASSET_TYPE_YOUTUBE && (
                        <ImageBackground
                            style={[
                                styles.imageContainer,
                                {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            ]}
                            source={Images.bg_carousel}
                            borderRadius={Dimens.RADIUS}
                        >
                            <Image source={Images.ic_play} />
                            <Text style={[AppStyles.fontContent, AppStyles.fontColorWhite]}>{I18n.t('video')}</Text>
                        </ImageBackground>
                    )}
                    {type === Consts.ASSET_TYPE_360 && (
                        <ImageBackground
                            style={[
                                styles.imageContainer,
                                {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            ]}
                            source={Images.bg_carousel}
                            borderRadius={Dimens.RADIUS}
                        >
                            <Image source={Images.ic_360_view} />
                            <Text style={[AppStyles.fontContent, AppStyles.fontColorWhite]}>
                                {I18n.t('virtual_tour')}
                            </Text>
                        </ImageBackground>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}

SliderEntry.propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
    onPress: PropTypes.func.isRequired
};

export default SliderEntry;
