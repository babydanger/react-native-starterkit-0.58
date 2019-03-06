import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'native-base';
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

class Document extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.props.onPress(this.props.document)}>
                <View style={[AppStyles.containerRow, styles.container, AppStyles.bgWhite]}>
                    <View style={[styles.columnOne]}>
                        <Text style={[AppStyles.fontTitle]}>{this.props.document.documentName}</Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {I18n.t(this.props.document.documentType)}
                        </Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>{`${I18n.t(
                            'uploaded_by'
                        )} ${this.props.document.createdBy ? this.props.document.createdBy.fullName : ''}`}</Text>
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {Utils.formatDateTime(this.props.document.created_at)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={Dimens.OPACITY}
                        onPress={() => this.props.onPressDownload(this.props.document)}
                    >
                        <View
                            style={[
                                styles.columnTwo,
                                AppStyles.bgGreenRadius,
                                AppStyles.paddingSmall,
                                AppStyles.paddingLayoutLeft,
                                AppStyles.paddingLayoutRight
                            ]}
                        >
                            <Text style={[AppStyles.fontDescription, AppStyles.fontColorWhite]}>
                                {I18n.t('download')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_layout'
    },
    columnOne: {
        flex: 1,
        flexDirection: 'column'
    },
    columnTwo: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

Document.propTypes = {
    onPress: PropTypes.func,
    onPressDownload: PropTypes.func,
    document: PropTypes.shape({
        createdBy: PropTypes.shape({
            fullName: PropTypes.string,
            id: PropTypes.number
        }),
        created_at: PropTypes.string,
        documentName: PropTypes.string,
        documentType: PropTypes.string,
        id: PropTypes.number,
        link: PropTypes.string,
        type: PropTypes.string
    })
};

Document.defaultProps = {
    onPress: document => {},
    onPressDownload: document => {},
    document: {
        createdBy: {
            fullName: 'Admin',
            id: 1
        },
        created_at: '2018-01-12T10:00:12.247Z',
        documentName: 'Rhodes Central Tower A Investment Summary.pdf',
        documentType: 'floor_plan',
        id: 1193,
        link: '/files/medias/file-1515751210605.pdf',
        type: 'document'
    }
};

export default Document;
