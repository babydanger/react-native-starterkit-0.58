import React, { Component } from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import { AppStyles, Colors, Utils, Images } from './appConfig';

let isLoading = false;
let isLoadMore = true;

/**
 * set is loading
 * @param loading
 * @param callback(loading)
 */
export const setIsLoading = (loading, callback) => {
    isLoading = loading;
    if (callback) callback(isLoading);
};

/**
 * set load more
 * @param loadMore
 */
export const setIsLoadMore = isLoadMore => {
    isLoadMore = loadMore;
};

/**
 * clear state
 */
export const clearState = () => {
    isLoading = false;
    isLoadMore = true;
};

/**
 * render item
 * @param itemCount
 * @param itemInfo
 * @param onLoadMore (offset) => { }
 * @param onRenderItem (item) => { return View}
 */
export const renderItem = (itemCount, itemInfo, onLoadMore, onRenderItem) => {
    if (itemInfo.index === itemCount - 1 && isLoadMore && !isLoading) {
        if (onLoadMore) {
            onLoadMore(itemCount);
        }
    }
    return onRenderItem ? onRenderItem(itemInfo.item) : null;
};

/**
 * render footer
 */
export const renderFooter = () => {
    return (
        <View style={styles.footer}>
            <ActivityIndicator animating size="large" color={Colors.COLOR_YELLOW} />
        </View>
    );
};

/**
 * render loading
 */
export const renderLoading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator animating size="large" color={Colors.COLOR_YELLOW} />
            <Text style={[AppStyles.fontContent, AppStyles.marginLayoutLeft, AppStyles.fontColorLabel]}>
                {I18n.t('loading')}
            </Text>
        </View>
    );
};

/**
 * render empty list
 */
export const renderEmptyList = (text, showIndicator = true) => {
    return (
        <View style={styles.loading}>
            {showIndicator && <ActivityIndicator animating size="large" color={Colors.COLOR_YELLOW} />}
            <Text style={[AppStyles.fontContent, AppStyles.marginLayoutLeft, AppStyles.fontColorLabel]}>{text}</Text>
        </View>
    );
};

/**
 * render separator item
 */
export const renderSeparatorItem = (height = 1, backgroundColor = Colors.COLOR_LIGHT_GRAY) => {
    return <View style={{ width: '100%', height: height, backgroundColor: backgroundColor }} />;
};

/**
 * render item when show dialog choose condition
 * @param {*} text 
 * @param {*} isTicked 
 */
export const renderItemDialog = (text, isTicked) => {
    return <View style={[AppStyles.containerRow, AppStyles.paddingContent]}>
        <Text style={[AppStyles.fontContent, { flex: 1 }]}>{text}</Text>
        {
            isTicked && <Image source={Images.ic_tick} style={[AppStyles.iconAction]} resizeMode='center' />
        }
    </View>
}

/**
 * render item when show dialog multiple choose condition
 * @param {*} text 
 * @param {*} isTicked 
 */
export const renderItemMultipleDialog = (text, isTicked) => {
    return <View style={[AppStyles.containerRow, AppStyles.paddingContent]}>
        <Text style={[AppStyles.fontContent, { flex: 1 }]}>{text}</Text>
        {
            isTicked && <Image source={Images.ic_tick} style={[AppStyles.iconAction]} resizeMode='center' />
        }
    </View>
}
const styles = EStyleSheet.create({
    // $outline: 1,
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_layout'
    },
    loading: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content'
    }
});
