import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
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
    FlatListUtils,
    ActionTypes,
    QS
} from '../../configs/appConfig';

class Header extends Component {
  render() {

    return (
      <View {...this.props}
        style={[styles.container, this.props.isBackgroundTransparent ? styles.transparent : styles.colorMenu, { opacity: this.props.opacity }]}>
        <View style={[this.props.isHideAction ? null : styles.left]}>{this.props.headerLeft}</View>
        <View style={styles.center}>{this.props.header}</View>
        <View style={[this.props.isHideAction ? null : styles.right]}>{this.props.headerRight}</View>
      </View>
    )
  }
}

Header.propTypes = {
  isBackgroundTransparent: PropTypes.bool,
  headerLeft: PropTypes.any,
  header: PropTypes.any,
  headerRight: PropTypes.any,
  isHideAction: PropTypes.bool,
  opacity: PropTypes.number
}

Header.defaultProps = {
  isBackgroundTransparent: false,
  headerLeft: null,
  header: null,
  headerRight: null,
  isHideAction: false,
  opacity: 1
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_MENU_HEADER,
        paddingTop: Platform.OS === 'ios' ? '$ios_Status_bar' : '$padding_content',
        alignItems: 'center'
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    colorMenu: {
        backgroundColor: Colors.COLOR_MENU_HEADER
    },
    left: {
        flex: Platform.OS === 'android' ? 0 : 1
    },
    center: {
        flex: Platform.OS === 'android' ? 1 : Utils.isScreenType() === Consts.SCREEN_3X ? 4 : 3
    },
    right: {
        flex: Platform.OS === 'android' ? 0 : 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});

export default Header;
