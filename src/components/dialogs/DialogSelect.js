import React, { Component } from 'react';
import { View, Text, Platform, Modal, TouchableOpacity, FlatList } from 'react-native';
import { Thumbnail } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import ButtonApp from '@ButtonApp';
import I18n from 'react-native-i18n';
import { AppStyles, Consts, Storage, Dimens, Utils, Colors, HeaderUtils, Images, QS } from '../../configs/appConfig';

class DialogSelect extends Component {
    constructor(props) {
        super(props);
    }
    renderHeader = () => {
        const { title } = this.props;
        return (
            <View style={styles.headerStyle}>
                <Text style={[AppStyles.fontTitle, styles.titleStyle]}>{title}</Text>
            </View>
        );
    };

    renderContent = () => {
        const { children } = this.props;
        return (
            <View style={styles.button}>
                <FlatList data={this.props.data} renderItem={({ item }) => this.renderItemRow(item)} />
            </View>
        );
    };
    renderItemRow = item => {
        <Text>{item.name}</Text>;
    };
    renderCancel = () => {
        return <ButtonApp title={I18n.t('cancel')} onPress={this.props.onCancel} />;
    };

    render() {
        const { showDialog } = this.props;
        return (
            <Modal visible={showDialog} animationType="slide" transparent>
                <View style={styles.container}>
                    {this.renderHeader()}
                    {this.renderContent()}
                    {this.renderCancel()}
                </View>
            </Modal>
        );
    }
}
const styles = EStyleSheet.create({
    container: {
        flex: 1,
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
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '$radius',
        padding: '$padding_content',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: '$radius_shadow',
        shadowOpacity: 1.0
    },
    itemStyle: {
        marginTop: 10,
        backgroundColor: '#919191',
        borderBottomColor: 'transparent'
    },
    itemTextStyle: {
        color: '#fff',
        fontSize: 18
    },
    selectTextStyle: {
        color: '#000',
        fontSize: 20
    },
    selectStyle: {
        borderWidth: 0,
        paddingTop: 21,
        paddingLeft: 0
    }
});

DialogSelect.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func,
    showDialog: PropTypes.bool
};

DialogSelect.defaultProps = {
    data: null,
    title: 'Please select',
    onCancel: () => {},
    onSelect: () => {},
    showDialog: false
};

export default DialogSelect;
