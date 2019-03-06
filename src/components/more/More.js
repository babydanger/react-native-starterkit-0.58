import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
    AppStyles,
    Consts,
    Storage,
    Dimens,
    Utils,
    Colors,
    HeaderUtils,
    Images,
    FlatListUtils
} from '../../configs/appConfig';

class More extends Component {
    render() {
        return (
            <View {...this.props}>
                {this.props.isLoadMore && (
                    <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.props.onPress}>
                        <View style={[styles.row]}>
                            <Text style={AppStyles.fontContent}>{this.props.text}</Text>
                            <Image style={styles.image} source={Images.ic_arrow} resizeMode="center" />
                        </View>
                    </TouchableOpacity>
                )}
                {this.props.isLoading && FlatListUtils.renderLoading()}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_layout',
        margin: '$padding_content'
    },
    image: {
        marginTop: 5,
        marginLeft: '$padding_content'
    }
});

More.defaultProps = {
    isLoadMore: true,
    isLoading: false,
    text: I18n.t('more'),
    onPress: () => {}
};

More.propTypes = {
    isLoadMore: PropTypes.bool,
    isLoading: PropTypes.bool,
    text: PropTypes.string,
    onPress: PropTypes.func
};

export default More;
