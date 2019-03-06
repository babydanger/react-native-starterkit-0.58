import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Button, Icon, Item, Input } from 'native-base';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

import AppStyles from '../../../configs/styles';
import Line from '../../../components/lines/Line';

import * as Dimens from '../../../configs/dimens';
import * as Utils from '../../../configs/utils';
import * as Colors from '../../../configs/colors';

const EditTextIcon = props => {
    const {
        placeholder,
        source,
        onChangeText,
        marginBottom,
        marginTop,
        editable,
        returnKeyType,
        onPressLeft,
        value,
        keyboardType,
        onSubmitEditing,
        refFunc,
        sourceRight,
        onPressRight,
        hideUnderLine,
        leftIconPress,
        customRef,
        secureTextEntry
    } = props;
    const style = [styles.item];
    style.push({ marginBottom });
    style.push({ marginTop });
    const stylesItem = hideUnderLine ? { borderColor: 'transparent' } : style;

    return (
        <Item style={stylesItem}>
            {leftIconPress ? (
                <TouchableOpacity onPress={onPressLeft} activeOpacity={Dimens.OPACITY}>
                    <Thumbnail square style={styles.icon} source={source} />
                </TouchableOpacity>
            ) : (
                <Thumbnail square style={styles.icon} source={source} />
            )}

            <Input
                style={[AppStyles.fontTitle]}
                ref={input => refFunc(input)}
                placeholder={placeholder}
                onChangeText={onChangeText}
                editable={editable}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                value={value}
                secureTextEntry={secureTextEntry}
            />
            {sourceRight !== null && (
                <TouchableOpacity onPress={onPressRight} activeOpacity={Dimens.OPACITY}>
                    <Image square style={styles.iconMedium} source={sourceRight} resizeMode="contain" />
                </TouchableOpacity>
            )}
        </Item>
    );
};
const styles = EStyleSheet.create({
    item: {
        marginBottom: '$padding_content',
        alignSelf: 'center'
    },
    icon: {
        width: '$size_icon_width',
        height: '$size_icon_width',
        marginRight: '$padding_content',
        marginLeft: '$padding_content'
    },
    iconRight: {
        width: '$size_icon_width',
        height: '$size_icon_width',
        marginRight: '$padding_content',
        marginLeft: '$padding_content'
    },
    noBorder: {
        borderColor: 'transparent'
    }
});

EditTextIcon.propTypes = {
    placeholder: PropTypes.string,
    source: PropTypes.any,
    onChangeText: PropTypes.func,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    editable: PropTypes.bool,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    refFunc: PropTypes.func,
    sourceRight: PropTypes.any,
    onPressRight: PropTypes.func,
    onPressLeft: PropTypes.func,
    hideUnderLine: PropTypes.bool,
    leftIconPress: PropTypes.bool,
    value: PropTypes.string
};

EditTextIcon.defaultProps = {
    marginBottom: Dimens.PADDING_LAYOUT,
    marginTop: 0,
    editable: true,
    returnKeyType: 'default',
    keyboardType: 'default',
    onSubmitEditing: () => {},
    refFunc: input => {},
    sourceRight: null,
    onPressRight: () => {},
    hideUnderLine: false,
    leftIconPress: false,
    onPressLeft: () => {}
};

export default EditTextIcon;
