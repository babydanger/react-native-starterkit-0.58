import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import { Input } from 'native-base';

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

import Line from '../../components/lines/Line';

class TextViewLable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                {
                    !Utils.isNullOrUndefined(this.props.label) && <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>{this.props.label}</Text>
                }
                <View style={[styles.content]}>
                    {this.props.iconLeft !== null && <Image style={[AppStyles.icon, AppStyles.marginContentRight]} source={this.props.iconLeft} resizeMode='contain' />}
                    <Text style={AppStyles.fontContent}>{this.props.value}</Text>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'column',
        width: '100%',
        padding: '$padding_content',
        alignItems: 'baseline',

    },
    content: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    error: {
        width: '100%',
        textAlign: 'right'
    },

    textInput: {
        height: 30
    }
});

TextViewLable.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    iconLeft: PropTypes.any,
}

TextViewLable.defaultProps = {
    label: '',
    value: '',
    iconLeft: null,
}

export default TextViewLable;
