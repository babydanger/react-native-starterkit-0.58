import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
// global resources
import { AppStyles, Consts, Dimens, Utils, Colors, HeaderUtils, Images } from '../../../configs/appConfig';

const ButtonApp = props => {
    const { title, onPress } = props;

    return (
        <TouchableOpacity style={styles.container} activeOpacity={Dimens.OPACITY} onPress={onPress}>
            <View style={AppStyles.buttonApp}>
                <Text style={[AppStyles.fontColorYellow, styles.text]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

ButtonApp.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};

ButtonApp.defaultProps = {
    title: 'Button',
    onPress: () => {}
};
const styles = EStyleSheet.create({
    container: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '$font_title',
        fontWeight: 'bold'
    }
});

export default ButtonApp;
