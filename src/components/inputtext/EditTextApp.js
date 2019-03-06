import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
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

class EditTextApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconRight: this.props.iconRightNormal
        };
    }

    onClickRight = () => {
        this.setState({
            iconRight:
                this.state.iconRight === this.props.iconRightNormal
                    ? this.props.iconRightActive
                    : this.props.iconRightNormal
        });

        if (this.props.onClickIconRight) {
            this.props.onClickIconRight();
        }
    };

    getRefInput = () => {
        return this.refInput;
    };

    render() {
        let line = <Line
        backgroundColor={
            Utils.isNullOrUndefined(this.props.error) ? Colors.COLOR_LIGHT_GRAY : Colors.COLOR_RED
        }
    />
        const { labelStyle, inputStyle, containerStyle } = this.props;
        return (
            <View style={[styles.container, {...containerStyle}]}>
                {!Utils.isNullOrUndefined(this.props.label) && (
                    <Text style={[AppStyles.fontContent, AppStyles.fontColorLabel,{marginLeft:5}, {...labelStyle}]}>{this.props.label}</Text>
                )}
                <View style={styles.content}>
                    {this.props.iconLeft !== null && (
                        <Image style={AppStyles.icon} source={this.props.iconLeft} resizeMode="contain" />
                    )}
                    <Input autoCorrect={false} {...this.props} ref={ref => (this.refInput = ref)} style={[styles.textInput, {...inputStyle}]} />
                    {!Utils.isNullOrUndefined(this.props.textRight) && (
                        <Text style={AppStyles.fontContent}>{this.props.textRight}</Text>
                    )}
                    {this.state.iconRight !== null && (
                        <TouchableOpacity
                            style={AppStyles.icon}
                            onPress={this.onClickRight}
                            activeOpacity={Dimens.OPACITY}
                        >
                            <Image
                                style={[AppStyles.icon]}
                                source={this.state.iconRight}
                                resizeMode={this.props.isIconRightCenter ? 'center' : 'contain'}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                {this.props.noLine ? null : line}
                {!Utils.isNullOrUndefined(this.props.error) && (
                    <Text style={[AppStyles.fontDescription, AppStyles.fontColorRed, styles.error]}>
                        {this.props.error}
                    </Text>
                )}
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
        height: Platform.OS === 'ios' ? 30 : 40   ,
        // backgroundColor: 'red'          
    }
});

EditTextApp.propTypes = {
    iconLeft: PropTypes.any,
    iconRightNormal: PropTypes.any,
    iconRightActive: PropTypes.any,
    onClickIconRight: PropTypes.func,
    error: PropTypes.string,
    label: PropTypes.string,
    textRight: PropTypes.string,
    isIconRightCenter: PropTypes.bool
};

EditTextApp.defaultProps = {
    iconLeft: null,
    iconRightNormal: null,
    iconRightActive: null,
    onClickIconRight: () => {},
    error: '',
    label: '',
    textRight: '',
    isIconRightCenter: false,
    labelStyle: {},
    inputStyle: {},
    containerStyle: {}
};

export default EditTextApp;
