import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { Thumbnail, Input } from 'native-base';
import ActionSheet from 'react-native-actionsheet'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import ModalDropdown from 'react-native-modal-dropdown';
import Dropdown from 'react-native-modal-select-option';

import {
    AppStyles, Consts, Storage, Dimens, Utils, Colors,
    HeaderUtils, Images, FlatListUtils, ActionTypes, QS
} from '../../configs/appConfig';

import Line from '../../components/lines/Line';

class TextView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClear: this.props.isClearText,
            selected: '1'
        };
        this.handlePress = this.handlePress.bind(this);
        this.showActionSheet = this.showActionSheet.bind(this);
    }

    showActionSheet() {
        this.ActionSheet.show();
    }

    handlePress(i) {
        this.setState({ selected: i });
        this.props.value = this.props.data[this.state.selected];
        this.props.onSected(i);
    }

    render() {
        const { hint, data } = this.props;

        return (
            <View style={[styles.container]}>
                {!Utils.isNullOrUndefined(this.props.label) && (
                    <Text style={[AppStyles.fontBadget, AppStyles.fontColorLabel]}>{this.props.label}</Text>
                )}
                <TouchableOpacity onPress={this.showActionSheet} activeOpacity={Dimens.OPACITY}>
                    <View style={styles.content}>
                        <View style={[(backgroundColor = 'gray')]}>
                            {this.props.iconLeft !== null && (
                                <TouchableOpacity activeOpacity={Dimens.OPACITY}>
                                    {' '}
                                    <Thumbnail style={styles.icon} source={this.props.iconLeft} />{' '}
                                </TouchableOpacity>
                            )}
                        </View>
                        <Text style={[AppStyles.fontContent, styles.text]}>
                            {this.state.isClear ? hint : data[this.state.selected]}
                        </Text>

                        {this.props.iconRight !== null && (
                            <TouchableOpacity>
                                <Thumbnail square style={styles.icon} source={this.props.iconRight} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <Line style={AppStyles.marginContentTop} backgroundColor={Colors.COLOR_LIGHT_GRAY} />
                </TouchableOpacity>
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
        backgroundColor: 'white'
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '$padding_content',
        marginTop: '$padding_content'
    },
    text: {
        flex: 1
    },
    icon: {
        width: '$size_icon_action',
        height: '$size_icon_action'
    },
    dropdown_2: {
        flex: 1,
        alignSelf: 'flex-end',
        width: '100%'
    },

    dropdown_2_row: {
        width: 200,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },

    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: '$font_content',
        color: 'black',
        textAlignVertical: 'center'
    },
    dropdown_2_separator: {
        height: 0.5,
        backgroundColor: 'gray'
    },
    dropdown_1: {
        flex: 1,
        top: 32,
        left: 8
    }
});

TextView.propTypes = {
    data: PropTypes.array,
    iconLeft: PropTypes.any,
    iconRight: PropTypes.any,
    onSected: PropTypes.any,
    label: PropTypes.string,
    hint: PropTypes.string,
    value: PropTypes.string,
    textRight: PropTypes.string,
    isClearText: PropTypes.bool
};

TextView.defaultProps = {
    data: null,
    iconLeft: null,
    iconRight: null,
    onSected: () => {},
    label: '',
    value: '',
    hint: 'Select',
    isClearText: false
};

export default TextView;
