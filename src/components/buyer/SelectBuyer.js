import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    InteractionManager,
    TextInput,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';
import { Container } from 'native-base';
import I18n from 'react-native-i18n';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

// global resources
import { Colors, Images, ActionTypes, Configs, Utils } from '../../configs/appConfig';

import styles from './SelectBuyer.style';

// components
import AppButton from '../buttons/buttonApp/ButtonApp';
import RadioButton from '../buttons/radiobuttons/RadioButton';
import CircleImage from '../../components/_images/CircleImage';

// action
import { renderEmptyList } from '../../configs/flatListUtils';

const baseSearchWidth = 15; //In percentage

class SelectBuyer extends Component {
    constructor(props) {
        super(props);
        const { data } = props;
        this.state = {
            searchText: '',
            selected: null,
            listBuyer: data ? data : [],
            loadingText: I18n.t('select_buyer.loading_text'),
            searchWidth: baseSearchWidth
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {});
    }

    componentWillReceiveProps(props) {
        const { data } = props;
        this.setState({
            listBuyer: data ? data : []
        });
    }

    getSelectedBuyer() {
        return this.state.selected;
    }

    onRefresh() {
        const { onRefresh } = this.props;

        if (onRefresh && typeof onRefresh == 'function') {
            onRefresh();
        }
    }

    onSelectPressed(item) {
        let buyerId = item.id;
        if (!this.state.selected) {
            this.setState({ selected: buyerId });
        } else {
            if (buyerId != this.state.selected) {
                this.setState({ selected: buyerId });
            }
        }
    }

    search(text, source) {
        let arr = Object.assign([], source ? source : []);
        if (text == '') {
            return arr;
        }
        let result = [];
        if (arr && arr.length > 0) {
            result = arr.filter(item => {
                return item.fullName
                    .trim()
                    .toLowerCase()
                    .includes(text.trim().toLowerCase());
            });
        }

        return result;
    }

    onChangeText(text) {
        const { data, onChangeText } = this.props;

        let result = this.search(text, data);

        this.setState({
            searchText: text,
            listBuyer: result,
            loadingText: I18n.t('select_buyer.emptyList'),
            searchWidth: baseSearchWidth + text.length * 2
        });

        // onChangeText(text);
    }

    onSubmitPressed() {
        if (!this.state.selected) {
            Alert.alert(I18n.t('common.warningAlertTitle'), I18n.t('select_buyer.nullSelectedBuyer'));
            return;
        }
    }

    focusOnSearchInput() {
        this.searchInput.focus();
    }

    onEndReached(params) {
        console.log('On Endreach: ', params);
        const { onEndReached } = this.props;
        if (onEndReached && typeof onEndReached == 'function') {
            onEndReached(params);
        }
    }

    renderHeader() {
        return (
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View>
                        <Text style={styles.headerText}>{I18n.t('select_buyer.header_title')}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.focusOnSearchInput();
                    }}
                >
                    <View style={styles.searchContainer}>
                        <IonIcons name={'ios-search-outline'} size={18} />
                        <TextInput
                            ref={ref => {
                                this.searchInput = ref;
                            }}
                            style={[styles.searchInput, { width: this.state.searchWidth.toString() + '%' }]}
                            placeholder={I18n.t('select_buyer.search_placeholder')}
                            returnKeyType={'done'}
                            onChangeText={text => {
                                this.onChangeText(text);
                            }}
                            value={this.state.searchText}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    renderFooter() {
        return (
            <View style={styles.footerContainer}>
                <AppButton
                    title={I18n.t('select_buyer.submit_btn')}
                    buttonStyle={styles.footerButton}
                    textStyle={styles.footerButtonText}
                    onPress={() => {
                        this.onSubmitPressed();
                    }}
                />
            </View>
        );
    }

    renderItem(wrapperItem) {
        let item = wrapperItem.item;
        let buyerId = item.id;
        let avatar = item.avatar ? { uri: Configs.BASE_URL + `${item.avatar}` } : Images.ic_image;
        let gender = item.gender == 1 ? 'Male' : 'Female';
        let rating = item.rating && item.rating != 0 ? I18n.t(`buyer_rating_${item.rating}`) : '';
        let ratingColor = item.rating && item.rating != 0 ? I18n.t(`buyer_rating_color_${item.rating}`) : 'transparent';
        return (
            <TouchableOpacity
                onPress={() => {
                    this.onSelectPressed(item);
                }}
            >
                <View style={styles.itemContainer}>
                    <View style={styles.radioButton}>
                        <RadioButton
                            onPress={() => {
                                this.onSelectPressed(item);
                            }}
                            selected={this.state.selected == buyerId ? true : false}
                        />
                    </View>
                    <View style={styles.circleImage}>
                        <CircleImage haveBorder={true} source={avatar} />
                    </View>
                    <View style={styles.itemInfoContainer}>
                        <Text style={styles.buyerName}>{item.fullName ? item.fullName : ''}</Text>
                        <Text style={styles.buyerInfo}>{item.address ? item.address : ''}</Text>
                        <Text style={styles.buyerInfo}>{gender}</Text>
                        <Text style={styles.buyerInfo}>{item.email ? item.email : ''}</Text>
                    </View>
                    <View style={styles.itemStatusContainer}>
                        <Text style={[styles.buyerStatus, { color: ratingColor }]}>{rating}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderEmptyList() {
        return (
            <View style={styles.emptyListContainer}>
                <Text>{this.state.loadingText}</Text>
            </View>
        );
    }

    render() {
        const { listBuyer } = this.state;
        const { refreshing } = this.props;
        return (
            <View style={styles.background}>
                <View style={styles.rootContainer}>
                    <View style={styles.contentContainer}>
                        {this.renderHeader()}
                        <KeyboardAwareFlatList
                            data={listBuyer ? listBuyer : []}
                            extraData={this.state.selected}
                            renderItem={itemInfo => this.renderItem(itemInfo)}
                            keyExtractor={(item, index) => index}
                            ListEmptyComponent={renderEmptyList(
                                this.state.loadingText,
                                this.state.loadingText != I18n.t('select_buyer.emptyList')
                            )}
                            refreshing={refreshing ? refreshing : false}
                            onRefresh={() => {
                                this.onRefresh();
                            }}
                            onEndReachedThreshold={0.5}
                            onEndReached={params => {
                                this.onEndReached(params);
                            }}
                            // keyboardDismissMode="on-drag"
                            keyboardShouldPersistTaps="handled"
                            enableOnAndroid={true}
                            extraHeight={Platform.OS === 'ios' ? 0 : 60}
                            // extraScrollHeight={60}
                        />
                    </View>
                    {/* {this.renderFooter()} */}
                </View>
            </View>
        );
    }
}

SelectBuyer.defaultProps = {
    onChangeText: () => {}
};

export default SelectBuyer;
