import React, { Component } from 'react';
import { View, Text, Platform, Modal, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

// global resources
import { AppStyles, Consts, Storage, Dimens, Utils, Colors, HeaderUtils, Images, QS } from '../../configs/appConfig';

// components
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonApp from '@ButtonApp';
import EditTextApp from '../inputtext/EditTextApp';
import EditText from '../inputtext/EditText';
import DropdownEditText from '../inputtext/DropdownEditText';
import ExtContainer from '../../components/basecomponents/body/ExtContainer';

class DialogApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: this.props.status,
            aspectList: this.props.aspects,
            propertyList: this.props.propertyTypes,
            statusArray: this.props.status,
            aspectArray: this.props.aspects,
            propertyArray: this.props.propertyTypes,
            statusIndex: '-1',
            aspectIndex: '-1',
            propertyTypeIndex: '-1',
            dataFilter: this.props.dataFilter,
            isclearText: false,

            propertyStatus: '',
            aspect: '',
            propertyType: '',
            bedMin: '',
            bedMax: '',
            internalMin: '',
            internalMax: '',
            externalMin: '',
            externalMax: '',
            totalMin: '',
            totalMax: ''
        };
    }
    async componentDidMount() {}

    componentWillReceiveProps(nextProps) {
        const config = this.props.commonReducer.configCommon.data;
        const propertyTypeList = this.props.commonReducer.propertyTypes.data;

        console.log('config', config);

        if (config) {
            const a = config.propertyStatusList.map(status => status.value);
            const b = config.aspects.map(aspect => aspect.value);
            this.setState({ statusArray: config.propertyStatusList });
            this.setState({ statusList: a });

            this.setState({ aspectArray: config.aspects });
            this.setState({ aspectList: b });

            console.log('status', a);
            console.log('aspects', b);
        }
        if (propertyTypeList) {
            const types = propertyTypeList.map(type => type.name);
            console.log('propertyTypeList', types);
            this.setState({ propertyArray: propertyTypeList });
            this.setState({ propertyList: types });
        }
    }

    renderHeader() {
        const { title, data } = this.props;
        const textAlign = Platform.OS === 'ios' ? 'center' : null;
        let titleHeader = title === '' ? 'No title' : title;
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.props.onClose}>
                    <Thumbnail square style={styles.icon} source={Images.ic_cancel} />
                </TouchableOpacity>
                <Text style={[AppStyles.fontTitle, styles.titleStyle]}>{title}</Text>
                <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.onClear()}>
                    <Text style={[{ textAlign }, AppStyles.fontTitle]}>{I18n.t('clear')}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    onSelectPropetyStatus = (pos, value) => {
        this.setState({ statusIndex: pos });
        this.setState({ propertyStatus: this.state.statusArray[pos].value });
        this.state.dataFilter.propertyStatus = this.state.statusArray[pos].key;
    };

    onSelectAspect = (pos, value) => {
        this.setState({ aspectIndex: pos });
        this.setState({ aspect: this.state.aspectArray[pos].value });
        this.state.dataFilter.aspect = this.state.aspectArray[pos].key;
    };

    onSelectTypeList = (pos, value) => {
        this.setState({ propertyTypeIndex: pos });
        this.setState({ propertyType: this.state.propertyArray[pos].name });
        this.state.dataFilter.propertyType = this.state.propertyArray[pos].id;
    };
    onTextChange = () => {};
    onClear = () => {
        this.setState({ propertyStatus: '' });
        this.setState({ aspect: '' });
        this.setState({ propertyType: '' });
        this.setState({ bedMin: '' });
        this.setState({ bedMax: '' });
        this.setState({ internalMin: '' });
        this.setState({ internalMax: '' });
        this.setState({ externalMin: '' });
        this.setState({ totalMin: '' });
        this.setState({ totalMax: '' });
    };
    renderContent() {
        return (
            <View style={styles.contenStyle}>
                <ExtContainer
                    enableOnAndroid={true}
                    backgroundColor={Colors.COLOR_BACKGROUND}
                    ref={ref => (this.refContainer = ref)}
                >
                    <View style={styles.contenStyle}>
                        <DropdownEditText
                            label={I18n.t('property_status')}
                            placeholder={I18n.t('select')}
                            options={this.state.statusList}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.onSelectPropetyStatus(pos, value)}
                            editable={false}
                            valueText={this.state.propertyStatus}
                        />
                        <DropdownEditText
                            label={I18n.t('aspect')}
                            placeholder={I18n.t('select')}
                            options={this.state.aspectList}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.onSelectAspect(pos, value)}
                            editable={false}
                            valueText={this.state.aspect}
                        />
                        <DropdownEditText
                            label={I18n.t('property_type')}
                            placeholder={I18n.t('select')}
                            options={this.state.propertyList}
                            iconRight={Images.ic_arrow_down}
                            onSelect={(pos, value) => this.onSelectTypeList(pos, value)}
                            editable={false}
                            valueText={this.state.propertyType}
                        />

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('beds')}
                                    ref={ref => (this.bedmin = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('min')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.bedMin}
                                    onChangeText={text => {
                                        this.setState({ bedMin: text });
                                        this.state.dataFilter.bedMin = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.bedmin.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    ref={ref => (this.bedMax = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('max')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.bedMax}
                                    onChangeText={text => {
                                        this.setState({ bedMax: text });
                                        this.state.dataFilter.bedMax = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.bedMax.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('internal_size')}
                                    ref={ref => (this.internalMin = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('min')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.internalMin}
                                    onChangeText={text => {
                                        this.setState({ internalMin: text });
                                        this.state.dataFilter.internalMin = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.internalMin.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    ref={ref => (this.internalMax = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('max')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.internalMax}
                                    onChangeText={text => {
                                        this.setState({ internalMax: text });
                                        this.state.dataFilter.internalMax = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.internalMax.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('external_size')}
                                    ref={ref => (this.externalMin = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('min')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.externalMin}
                                    onChangeText={text => {
                                        this.setState({ externalMin: text });
                                        this.state.dataFilter.externalMin = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.externalMin.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditTextApp
                                    ref={ref => (this.externalMax = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('max')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.externalMax}
                                    onChangeText={text => {
                                        this.setState({ externalMax: text });
                                        this.state.dataFilter.externalMax = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.externalMax.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.viewContent}>
                            <View style={styles.item}>
                                <EditTextApp
                                    label={I18n.t('total_size')}
                                    ref={ref => (this.totalMin = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('min')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.totalMin}
                                    onChangeText={text => {
                                        this.setState({ totalMin: text });
                                        this.state.dataFilter.totalMin = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.totalMin.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                            <View style={styles.item}>
                                <EditText
                                    ref={ref => (this.totalMax = ref)}
                                    style={[AppStyles.fontContent]}
                                    placeholder={I18n.t('max')}
                                    keyboardType="numeric"
                                    placeholderTextColor={Colors.COLOR_GRAY}
                                    value={this.state.totalMax}
                                    onChangeText={text => {
                                        this.setState({ totalMax: text });
                                        this.state.dataFilter.totalMax = text;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        this.totalMax.getRefInput()._root.focus();
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </ExtContainer>
            </View>
        );
    }

    renderButtonSubmit() {
        return <ButtonApp title={I18n.t('submit')} onPress={this.props.onSubmit} />;
    }

    render() {
        const { showDialog } = this.props;
        return (
            <Modal visible={showDialog} animationType="slide" transparent>
                <View style={styles.container}>
                    {this.renderHeader()}
                    {this.renderContent()}
                    {this.renderButtonSubmit()}
                </View>
            </Modal>
        );
    }
}
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: '$padding_layout',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '$padding_layout',
        paddingTop: '$padding_layout',
        alignItems: 'center'
    },
    containerView: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    contenStyle: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        paddingTop: '$padding_layout',
        backgroundColor: 'white'
    },
    titleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    icon: {
        width: '$size_icon_action',
        height: '$size_icon_action',
        marginRight: '$padding_content',
        marginLeft: '$padding_content'
    },
    viewContent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '$padding_content'
    },
    item: {
        width: '50%'
    }
});

DialogApp.propTypes = {
    status: PropTypes.array,
    aspects: PropTypes.array,
    propertyTypes: PropTypes.array,
    dataFilter: PropTypes.object,
    title: PropTypes.string,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    showDialog: PropTypes.bool
};

DialogApp.defaultProps = {
    title: 'Filter',
    onClose: () => {},
    onSubmit: () => {},
    showDialog: false
};

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer,
        projectReducer: state.projectReducer,
        commonReducer: state.commonReducer
    };
};

export default connect(mapStateToProps)(DialogApp);
// export default  DialogApp;
