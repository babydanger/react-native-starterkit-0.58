import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Thumbnail } from 'native-base';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import { Input } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import {
    AppStyles,
    Utils,
    Colors,
} from '../../configs/appConfig';
import ModalSelector from 'react-native-modal-selector';
const deviceWidth = Dimensions.get('window').width;
class ModalPickerEditText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClear: this.props.isClearText
        };
    }

    render() {
        const { style, isHalf, placeholder, valueText, onSelect, data } = this.props;        
        return (
            <View style={[styles.container, style]}>
                {!Utils.isNullOrUndefined(this.props.label) && (
                    <Text
                        style={[
                            AppStyles.fontContent,
                            AppStyles.fontColorLabel,
                            { marginLeft: 5, fontSize: responsiveFontSize(1.8) }
                        ]}
                    >
                        {this.props.label}
                    </Text>
                )}
                <ModalSelector
                    optionContainerStyle={{ height: '80%' }}
                    selectStyle={[styles.selectStyle]}
                    selectTextStyle={{ fontSize: responsiveFontSize(2.2), color: Colors.COLOR_GRAY }}
                    data={data ? data : []}
                    initValue="Country"
                    onChange={option => {
                        if (onSelect && typeof onSelect == 'function'){
                            onSelect(option);
                        }
                    }}
                >
                    <View style={[styles.selectStyle, styles.selectContainer]}>
                        <Text
                            style={{ color: Colors.COLOR_GRAY }}
                            value={valueText}
                            editable={false}
                            placeholder={placeholder}
                            pointerEvents="none"
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                        >
                            {!valueText || valueText == '' ? placeholder : valueText}
                        </Text>

                        {this.props.iconRight !== null && (
                            <View style={{marginHorizontal: 5}}>
                                <Thumbnail square style={styles.icon} source={this.props.iconRight} />
                            </View>
                        )}
                    </View>
                </ModalSelector>
                {/* </Item> */}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flexDirection: 'column',
        // marginTop: '$padding_layout',
        // padding: '$padding_content',
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
        margin: 0,
        fontSize: responsiveFontSize(2.2)
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 5
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
        marginLeft: -deviceWidth / 2 + deviceWidth / 10,
        marginRight: 0
    },
    item: {
        marginBottom: '$padding_layout'
    },
    // icon: {
    //     width: '$size_icon_action',
    //     height: '$size_icon_action',
    //     marginRight: '$padding_content',
    //     marginLeft: '$padding_content'
    // },
    selectContainer: {
        borderBottomColor: Colors.COLOR_LIGHT_GRAY,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
        flexDirection: 'row',
        height: 30
    },
    selectStyle: {
        width: '100%',
        height: 30,
        padding: 0,
        margin: 0
    }
});

ModalPickerEditText.propTypes = {
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    valueText: PropTypes.string,
    options: PropTypes.array,
    source: PropTypes.any,
    iconRight: PropTypes.any,
    editable: PropTypes.bool
};

ModalPickerEditText.defaultProps = {
    valueText: '',
    placeholder: '',
    editable: true
};

export default ModalPickerEditText;
