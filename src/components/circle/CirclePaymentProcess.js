import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { AppStyles, Utils, Colors, Images } from '../../configs/appConfig';

import styles from './CirclePaymentProcess.style';

class CirclePaymentProcess extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { disabled, onPress } = this.props;
        return (
            <TouchableOpacity disabled={disabled} onPress={onPress}>
                <View style={[styles.circle, { backgroundColor: this.props.backgroundColor }]}>
                    {Utils.isNullOrUndefined(this.props.text) && (
                        <Image style={[styles.image]} source={Images.ic_checked} resizeMode="contain" />
                    )}
                    {!Utils.isNullOrUndefined(this.props.text) && (
                        <Text
                            numberOfLines={1}
                            style={[AppStyles.fontBadget, AppStyles.fontBold, { color: this.props.textColor }]}
                        >
                            {this.props.text}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}

CirclePaymentProcess.propTypes = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string
};

CirclePaymentProcess.defaultProps = {
    backgroundColor: Colors.COLOR_WHITE,
    textColor: Colors.COLOR_BLACK,
    text: '',
    disabled: false,
    onPress: () => {}
};

export default CirclePaymentProcess;
