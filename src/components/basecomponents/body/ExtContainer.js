import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Container } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import DropdownAlert from 'react-native-dropdownalert';
import I18n from 'react-native-i18n';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';

// component
import Search from '../../search/Search';
import Dialog from '../../dialogs/Dialog';
import ConfirmDialog from '../../dialogs/ConfirmDialog';
import ProgressDialog from '../../dialogs/ProgressDialog';
import Line from '../../lines/Line';

// global
import { AppStyles, Colors, Dimens, FlatListUtils, Utils } from '../../../configs/appConfig';

// height view selected
const HEIGHT_SELECTED = '40%';

export default class ExtContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dialog customize
            dialogVisible: false,
            dialogView: null,
            // dialog loading
            isVisibleLoading: false,
            // dialog confirm
            isVisibleConfirm: false,
            messageConfirm: '',
            onClickPositive: () => { },
            onClickNegative: () => { },
            // dialog show message
            isShowMessage: false,
            message: '',
            onClickOk: () => { },
            // selected items
            origins: [],
            items: [],
            renderItem: (itemInfo) => { },
            height: HEIGHT_SELECTED,
            isFilter: false,
            compareItem: (itemInfo, text) => { }
        };
    }

    // DIALOG
    /**
     * show dialog
     * @param {*} dialogVisible
     * @param {*} view
     */
    showDialog = (dialogVisible, view) => {
        this.setState({
            dialogVisible: dialogVisible,
            dialogView: view
        });
    };

    /**
     * show loading
     * @param {*} isLoading
     */
    showLoading = isLoading => {
        this.setState({ isVisibleLoading: isLoading });
    };

    /**
     * show message
     * @param message
     * @param onClickOk
     */
    showMessage = (message, onClickOk) => {
        this.setState({
            isShowMessage: true,
            message: message,
            onClickOk: onClickOk === null ? () => { } : onClickOk
        });
    };

    /**
     * show message
     * @param {*} messageConfirm
     * @param {*} onClickPositive
     * @param {*} onClickNegative
     */
    showMessageConfirm = (messageConfirm, onClickPositive, onClickNegative) => {
        this.setState({
            isVisibleConfirm: true,
            messageConfirm: messageConfirm,
            onClickPositive: onClickPositive === null ? () => { } : onClickPositive,
            onClickNegative: onClickNegative === null ? () => { } : onClickNegative
        });
    };

    // TOAST
    /**
     * show error message
     * @param {*} title
     * @param {*} message
     */
    showDropdownAlertError = (title, message) => {
        this.dropdownAlert.alertWithType('error', title, message);
    };

    /**
     * show info message
     * @param {*} title
     * @param {*} message
     */
    showDropdownAlertInfo = (title, message) => {
        this.dropdownAlert.alertWithType('info', title, message);
    };

    /**
     * show warn message
     * @param {*} title
     * @param {*} message
     */
    showDropdownAlertWarn = (title, message) => {
        this.dropdownAlert.alertWithType('warn', title, message);
    };

    /**
     * show success message
     * @param {*} title
     * @param {*} message
     */
    showDropdownAlertSuccess = (title, message) => {
        this.dropdownAlert.alertWithType('success', title, message);
    };

    // SELECTED
    /**
     * open selected dialog
     * @param {*} items
     * @param {*} renderItem: (itemInfo)=>{}
     * @param {*} heightView: 10%, 20%, 30%, 40% etc of screen
     * @param {*} isFilter
     * @param {*} compareItem: (itemInfo, text)=> {}
     */
    openSelectedDialog = (items, renderItem, heightView, isFilter, compareItem) => {
        this.setState({
            origins: items,
            items: items, renderItem: renderItem,
            height: Utils.isNullOrUndefined(heightView) ? HEIGHT_SELECTED : heightView,
            isFilter: isFilter,
            compareItem: compareItem
        });
        this.refModal.open();
    };

    /**
     * close selected dialog
     */
    closeSelectedDialog = () => {
        this.refModal.close();
    };

    /**
     * open multiple selected dialog
    * @param {*} items 
    * @param {*} renderItem: (itemInfo)=>{} 
    * @param {*} heightView: 10%, 20%, 30%, 40% etc of screen 
     */
    openMultipleSelectedDialog = (items, renderItem, heightView) => {
        this.setState({
            origins: items,
            items: items, renderItem: renderItem,
            height: Utils.isNullOrUndefined(heightView) ? HEIGHT_SELECTED : heightView
        });
        this.refModalMultiple.open();
    }

    /**
     * done selected
     */
    doneMultipleSelectedDialog = () => {
        this.refModalMultiple.close();
    }

    /**
    * close Multiple selected dialog
   */
    closeMultipleSelectedDialog = () => {
        this.refModalMultiple.close();
    }

    render() {
        const { children } = this.props;
        return (
            <Container>
                {/* <StatusBar
                    barStyle="dark-content"
                    backgroundColor={Colors.COLOR_BACKGROUND} /> */}
                <View
                    style={[styles.container, this.props.isPaddingContent ? AppStyles.paddingContent : styles.noPadding,
                        { backgroundColor: this.props.backgroundColor }]}>
                    {/* children view */}
                    {children}
                    {/* loading view */}
                    {
                        this.props.isLoadingView && <View style={styles.loadingView}>{FlatListUtils.renderLoading()}</View>
                    }
                </View>

                {/* dialog customize view */}
                <Dialog
                    visible={this.state.dialogVisible}
                    onTouchOutside={() => this.setState({ dialogVisible: false })}>
                    <View>{this.state.dialogView}</View>
                </Dialog>

                {/* confirm dialog */}
                <ConfirmDialog
                    title={I18n.t('app_name')}
                    message={this.state.messageConfirm}
                    visible={this.state.isVisibleConfirm}
                    positiveButton={{
                        title: I18n.t('yes'),
                        onPress: () => {
                            this.setState({ isVisibleConfirm: false });
                            this.state.onClickPositive();
                        },
                        textColor: Colors.COLOR_YELLOW
                    }}
                    negativeButton={{
                        title: I18n.t('cancel'),
                        onPress: () => {
                            this.setState({ isVisibleConfirm: false });
                            this.state.onClickNegative();
                        },
                        textColor: Colors.COLOR_GRAY
                    }} />

                {/* message box */}
                <ConfirmDialog
                    title={I18n.t('app_name')}
                    message={this.state.message}
                    visible={this.state.isShowMessage}
                    positiveButton={{
                        title: I18n.t('ok'),
                        onPress: () => {
                            this.setState({ isShowMessage: false });
                            this.state.onClickOk();
                        },
                        textColor: Colors.COLOR_YELLOW
                    }} />

                {/* loading dialog */}
                <ProgressDialog
                    visible={this.state.isVisibleLoading}
                    onTouchOutside={() => { this.setState({ isVisibleLoading: false }); }}
                    message={I18n.t('loading')}
                    activityIndicatorSize="large"
                    activityIndicatorColor={Colors.COLOR_YELLOW} />

                {/* dialog select value */}
                <Modal
                    style={[styles.modal, { height: this.state.height }]}
                    position={'bottom'}
                    ref={ref => (this.refModal = ref)}
                    swipeToClose={false}>
                    {/* header */}
                    <View
                        style={[AppStyles.containerRow,
                            AppStyles.paddingContent,
                            { backgroundColor: Colors.COLOR_MENU_HEADER }]}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.closeSelectedDialog}>
                                <Text style={[AppStyles.fontContent, AppStyles.fontColorLabel]}>
                                    {I18n.t('cancel')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text numberOfLines={1}
                                style={[AppStyles.fontTitle, AppStyles.fontColorYellow, { textAlign: 'center' }]}>
                                {I18n.t('select_value')}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
                    {/* search */}
                    {
                        this.state.isFilter && this.state.compareItem && <View style={[AppStyles.containerColumn]}>
                            <View style={[AppStyles.containerColumn, AppStyles.paddingContentTop, AppStyles.paddingContentBottom]}>
                                <Search hint={I18n.t('filter')}
                                    onTextChange={(text) => {
                                        console.log('text', text);
                                        let items = this.state.origins;
                                        if (!Utils.isNullOrUndefined(text)) { items = items.filter(n => this.state.compareItem(n, text.toLowerCase())); }
                                        this.setState({ items: items });
                                    }} />
                            </View>
                            <Line />
                        </View>
                    }
                    {/* data */}
                    <FlatList
                        ref={ref => (this.refFlatList = ref)}
                        data={this.state.items}
                        renderItem={this.state.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={() => FlatListUtils.renderSeparatorItem()} />
                </Modal>

                {/* dialog multiple select value */}
                <Modal style={[styles.modal, { height: this.state.height }]} position={'bottom'} ref={(ref) => this.refModalMultiple = ref} swipeToClose={false}>
                    <View style={[AppStyles.containerRow, AppStyles.paddingContent, { backgroundColor: Colors.COLOR_MENU_HEADER }]}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.closeMultipleSelectedDialog}>
                                <Text style={[AppStyles.fontContent, AppStyles.fontColorLabel]}>{I18n.t('cancel')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text numberOfLines={1} style={[AppStyles.fontTitle, AppStyles.fontColorYellow, { textAlign: 'center' }]}>{I18n.t('select_value')}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.doneMultipleSelectedDialog}>
                                <Text style={[AppStyles.fontContent, AppStyles.fontColorLabel]}>{I18n.t('done')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <FlatList
                        ref={(ref) => this.refFlatList = ref}
                        data={this.state.items}
                        renderItem={this.state.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={() => FlatListUtils.renderSeparatorItem()} />
                </Modal>

                {/* alert message */}
                <DropdownAlert ref={ref => (this.dropdownAlert = ref)} updateStatusBar={false} translucent={true} />
            </Container>
        );
    }
}

ExtContainer.propTypes = {
    isPaddingContent: PropTypes.bool,
    backgroundColor: PropTypes.string,
    isLoadingView: PropTypes.bool
};

ExtContainer.defaultProps = {
    isPaddingContent: false,
    backgroundColor: 'transparent',
    isLoadingView: false
};

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flex: 1
    },
    noPadding: {
        padding: 0
    },
    modal: {
        width: '100%'
    },
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.8
    }
});
