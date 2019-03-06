import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Platform } from 'react-native';
import { Input } from 'native-base';

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
    QS
} from '../configs/appConfig';

/**
 * @param {*} icon
 * @param {*} onClick
 */
export const headerIcon = (icon, onClick) => {
    return (
        <View style={AppStyles.paddingLayout}>
            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={onClick} style={[AppStyles.paddingLayoutRight]}>
                <Image source={icon} style={AppStyles.iconAction} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

export const headerTitle = title => {
    return (
        <View style={[AppStyles.paddingContent, { alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start' }]}>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[AppStyles.fontTitle, AppStyles.fontColorYellow, { textAlign: 'center' }]}
            >
                {title}
            </Text>
        </View>
    );
};

/**
 * header style
 */
export const headerStyle = () => ({
    backgroundColor: Colors.COLOR_MENU_HEADER,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    shadowOpacity: 0
});
