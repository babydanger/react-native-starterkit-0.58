import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

import {
    AppStyles,
    Dimens,
    Utils,
    Colors,
    Images
} from '../../configs/appConfig';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', isClear: false };
    }

    getConditionText = () => {
        return this.state.text;
    };

    onClear = () => {
        this.setState({ text: '', isClear: false });
        if (this.props.onTextChange) {
            this.props.onTextChange('');
        }
    };

    onTextChange = text => {
        this.setState({ text: text, isClear: Utils.isNullOrUndefined(text) ? false : true });
        if (this.props.onTextChange) {
            this.props.onTextChange(text);
        }
    };

    render() {
        return <View style={[AppStyles.containerRow]}>
            <View style={[styles.rowSearch, AppStyles.bgWhite]}>
                <Image source={Images.ic_search_gray} style={AppStyles.iconAction} resizeMode="contain" />
                <Input
                    placeholder={this.props.hint}
                    placeholderTextColor={Colors.COLOR_GRAY}
                    value={this.state.text}
                    style={[AppStyles.fontDescription, styles.input]}
                    returnKeyType="search"
                    onSubmitEditing={() => { this.props.onClickSearch(this.state.text); }}
                    onChangeText={this.onTextChange} />
                {
                    this.state.isClear && <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.onClear}>
                        <Image style={AppStyles.iconAction} source={Images.ic_clear} resizeMode="contain" />
                    </TouchableOpacity>
                }
            </View>
            {
                !Utils.isNullOrUndefined(this.props.textRight) && <TouchableOpacity
                    activeOpacity={Dimens.OPACITY} onPress={() => this.props.onClickFilter(this.state.text)}>
                    <Text style={this.props.textRightStyle}>{this.props.textRight}</Text>
                </TouchableOpacity>
            }
        </View>;
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    rowSearch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '$padding_layout',
        paddingRight: '$padding_layout',
        borderRadius: '$radius_input'
    },
    input: {
        marginLeft: '$padding_layout',
        height: '$height_input_text'
    }
});

Search.propTypes = {
    hint: PropTypes.string,
    textRight: PropTypes.string,
    textRightStyle: PropTypes.any,
    onTextChange: PropTypes.func,
    onClickSearch: PropTypes.func,
    onClickFilter: PropTypes.func
};

Search.defaultProps = {
    hint: I18n.t('search'),
    textRight: '',
    textRightStyle: null,
    onTextChange: (text) => { },
    onClickSearch: (text) => { },
    onClickFilter: (text) => { }
};

export default Search;
