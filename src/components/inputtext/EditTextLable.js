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

class EditTextLable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                {
                    !Utils.isNullOrUndefined(this.props.label) && <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>{this.props.label}</Text>
                }
                <Input  {...this.props} ref={(ref) => this.refInput = ref} style={AppStyles.fontContent} />
                <Line />
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'column',
        width: '100%',
        padding: '$padding_content'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        width: '100%',
        textAlign: 'right'
    },

    textInput: {
        height: 30
    }
});

EditTextLable.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
};

EditTextLable.defaultProps = {
    label: '',
    value: ''
};

export default EditTextLable;
