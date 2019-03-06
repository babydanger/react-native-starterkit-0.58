import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { Input } from 'native-base';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';
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

class HeaderInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', isCancel: false };
    }

    onHide = () => {
        this.setState({ text: '', isCancel: false });
    };

    render() {
        return (
            <View style={[AppStyles.containerRow, AppStyles.paddingContent]}>
                <View style={[styles.containerRow]}>
                    <Image
                        source={Images.ic_search_gray}
                        resizeMode="contain"
                        style={[
                            AppStyles.iconAction,
                            {
                                marginLeft: Dimens.PADDING_CONTENT,
                                marginRight: Dimens.PADDING_CONTENT
                            }
                        ]}
                    />

                    <Input
                        value={this.state.text}
                        style={[AppStyles.fontContent, styles.input]}
                        returnKeyType="search"
                        onSubmitEditing={() => {
                            this.props.onSearch(this.state.text);
                        }}
                        onChangeText={text => {
                            this.setState({ text: text, isCancel: Utils.isNullOrUndefined(text) ? false : true });
                        }}
                    />

                    {this.state.isCancel && (
                        <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.onHide}>
                            <Image
                                source={Images.ic_clear}
                                resizeMode="contain"
                                style={[
                                    AppStyles.iconAction,
                                    {
                                        marginLeft: Dimens.PADDING_CONTENT,
                                        marginRight: Dimens.PADDING_CONTENT
                                    }
                                ]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.props.onCancel}>
                    <Text
                        style={[
                            AppStyles.fontContent,
                            AppStyles.fontColorWhite,
                            {
                                marginLeft: Dimens.PADDING_CONTENT
                            }
                        ]}
                    >
                        {I18n.t('cancel')}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

HeaderInput.propTypes = {
    onSearch: PropTypes.func,
    onCancel: PropTypes.func
};

HeaderInput.defaultProps = {
    onSearch: (text = {}),
    onCancel: () => {}
};

const styles = EStyleSheet.create({
    // $outline: 1,
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '$color_white',
        borderRadius: '$radius_action'
    },
    input: {
        padding: 0,
        height: '$height_input_text',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HeaderInput;
