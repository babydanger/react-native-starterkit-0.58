import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { Text, Input } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

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
    QS,
    Configs
} from '../../configs/appConfig';

import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EditText from '../inputtext/EditText';
import EditTextApp from '../inputtext/EditTextApp';
import TextView from '../textview/TextView';
import ExtContainer from '../../components/basecomponents/body/ExtContainer';
import DropdownEditText from '../inputtext/DropdownEditText';

class FilterProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyTypes: ['Cancel', 'Ab', 'BB', 'CC'],
            propertyTypeIndex: '-1'
        };
    }

    render() {
        const { isClear, data } = this.props;
        if (isClear) {
            this.setState({ propertyTypeIndex: '-1' });
        }
        return (
            <KeyboardAwareScrollView enableOnAndroid={true}>
                <ExtContainer ref={ref => (this.refContainer = ref)}>
                    <View style={styles.container}>
                        <DropdownEditText
                            label={I18n.t('property_status')}
                            placeholder={I18n.t('select')}
                            options={this.state.propertyTypes}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.setState({ propertyTypeIndex: pos })}
                            editable={false}
                            valueText={this.state.propertyTypes[this.state.propertyTypeIndex]}
                        />
                        <DropdownEditText
                            label={I18n.t('property_status')}
                            placeholder={I18n.t('select')}
                            options={this.state.propertyTypes}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.setState({ propertyTypeIndex: pos })}
                            editable={false}
                            valueText={this.state.propertyTypes[this.state.propertyTypeIndex]}
                        />
                        <DropdownEditText
                            label={I18n.t('property_status')}
                            placeholder={I18n.t('select')}
                            options={this.state.propertyTypes}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.setState({ propertyTypeIndex: pos })}
                            editable={false}
                            valueText={this.state.propertyTypes[this.state.propertyTypeIndex]}
                        />

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    value={data === null ? '' : data.bedMin}
                                    onChangeText={text => {
                                        data.bedMin = text;
                                    }}
                                    label={I18n.t('beds')}
                                    placeholder={I18n.t('min')}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    value={data === null ? '' : data.bedMax}
                                    onChangeText={text => {
                                        data.bedMax = text;
                                    }}
                                    placeholder={I18n.t('max')}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('internal_size')}
                                    value={data === null ? '' : data.internalMin}
                                    onChangeText={text => {
                                        data.internalMin = text;
                                    }}
                                    placeholder={I18n.t('min')}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    value={data === null ? '' : data.internalMax}
                                    placeholder={I18n.t('max')}
                                    onChangeText={text => {
                                        data.internalMax = text;
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('external_size')}
                                    value={data === null ? '' : data.externalMin}
                                    onChangeText={text => {
                                        data.externalMin = text;
                                    }}
                                    placeholder={I18n.t('min')}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    value={data === null ? '' : data.externalMax}
                                    onChangeText={text => {
                                        data.externalMax = text;
                                    }}
                                    placeholder={I18n.t('max')}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('total_size')}
                                    value={data === null ? '' : data.totalMin}
                                    onChangeText={text => {
                                        data.totalMin = text;
                                    }}
                                    placeholder={I18n.t('min')}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    value={data === null ? '' : data.totalMax}
                                    onChangeText={text => {
                                        data.totalMax = text;
                                    }}
                                    placeholder={I18n.t('max')}
                                />
                            </View>
                        </View>
                    </View>
                </ExtContainer>
            </KeyboardAwareScrollView>
        );
    }
}
FilterProject.propTypes = {
    data: PropTypes.object,
    isClear: PropTypes.bool
};

FilterProject.defaultProps = {
    isClear: false,
    data: null
};
const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: '$padding_layout'
    },
    viewContent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '$padding_content'
    },
    item: {
        width: '50%'
    },
    dropdown_2: {
        alignSelf: 'flex-end',
        width: 250,
        top: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,

        backgroundColor: 'red'
    },

    dropdown_2_row: {
        width: 250,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },

    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'black',

        textAlignVertical: 'center'
    },
    dropdown_2_separator: {
        height: 1
    },
    dropdown_1: {
        flex: 1,
        top: 32,
        left: 8
    }
});

export default FilterProject;
