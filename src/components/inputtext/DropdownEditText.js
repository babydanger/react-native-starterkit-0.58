import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { Thumbnail, Item } from 'native-base';
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
import ModalDropdown from 'react-native-modal-dropdown';
import Dropdown from 'react-native-modal-select-option';
import Line from '../../components/lines/Line';
import DialogSelect from '../../components/dialogs/DialogSelect';
const deviceWidth = Dimensions.get("window").width
class DropdownEditText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClear: this.props.isClearText
        };
    }

    render() {
        const { style,isHalf,placeholder, valueText, options, onSelect, source, editable } = this.props;
        var heightDropdown = options.length * 20;
        return (
            <View style={[styles.container,style]}>
                {!Utils.isNullOrUndefined(this.props.label) && (
                    <Text
                        style={[
                            AppStyles.fontContent,
                            AppStyles.fontColorLabel,
                            {marginLeft:5}
                        ]}
                    >
                        {this.props.label}
                    </Text>
                )}
                <Item onPress={() => this._dropdown.show()} style={{ padding: 0, margin: 0 }}>
                    <Input
                        style={styles.text}
                        value={valueText}
                        editable={false}
                        placeholder={placeholder}
                        pointerEvents="none"
                    />

                    {this.props.iconRight !== null && (
                        <TouchableOpacity onPress={() => this._dropdown.show()} >
                            <Thumbnail square style={styles.icon} source={this.props.iconRight} />
                        </TouchableOpacity>
                    )}

                    {/* <Line style={AppStyles.marginContentTop} backgroundColor={Colors.COLOR_LIGHT_GRAY} /> */}
                    <ModalDropdown
                        ref={el => (this._dropdown = el)}
                        style={{width: 0, margin: 0, padding: 0 }}
                        showsVerticalScrollIndicator={false}
                        options={options}
                        dropdownStyle={[isHalf ? styles.dropdownHalf : styles.dropdown]}
                        onSelect={onSelect}
                        dropdownTextStyle={[AppStyles.fontContent, styles.text, { flex: 1 }]}
                        disabled={!editable}
                    />
                </Item>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flexDirection: 'column',
        marginTop: '$padding_layout',
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
        width: '100%',
        height: 30,
        padding: 0,
        margin: 0
    },
    icon: {
        width: '$size_icon_action',
        height: '$size_icon_action'
    },
    dropdown: {
        flex: 1,
        width: '90%',
        marginTop: '$padding_layout',
        marginLeft: '$padding_layout',
        marginRight: 0
    },
    dropdownHalf: {
        flex: 1,
        width: '40%',
        marginTop: '$padding_layout',
        marginLeft: -deviceWidth/2 + deviceWidth/10 ,
        marginRight: 0
    },
    item: {
        marginBottom: '$padding_layout'
    },
    icon: {
        width: '$size_icon_action',
        height: '$size_icon_action',
        marginRight: '$padding_content',
        marginLeft: '$padding_content'
    }
});

DropdownEditText.propTypes = {
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    valueText: PropTypes.string,
    options: PropTypes.array,
    source: PropTypes.any,
    iconRight: PropTypes.any,
    editable: PropTypes.bool
};

DropdownEditText.defaultProps = {
    valueText: '',
    placeholder: '',
    editable: true
};

export default DropdownEditText;
