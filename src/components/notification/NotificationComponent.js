import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import HTML from 'react-native-render-html';

// global
import {
    AppStyles, Consts, Storage, Dimens, Utils, Colors,
    HeaderUtils, Images, FlatListUtils, ActionTypes, QS, Configs
} from '../../configs/appConfig';

// component
import Column from '../lines/Column';

class NotificationComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dataAtIndex = this.props.dataIndex.item;
        let thumbnail = '';

        if (!Utils.isNullOrUndefined(dataAtIndex.avartaUrl)) {
            thumbnail = Configs.BASE_URL + dataAtIndex.avartaUrl;
        }

        return <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={() => this.props.onPress(dataAtIndex)}>
            <View style={[AppStyles.containerRow]}>
                <View style={[styles.container, AppStyles.paddingContent]}>
                    <Image source={!Utils.isNullOrUndefined(thumbnail) ? { uri: thumbnail } : Images.bg_image} style={[AppStyles.avatarMedium, styles.image]} />
                    <View style={[styles.column, AppStyles.paddingContent]}>
                        <HTML html={dataAtIndex.desc} baseFontStyle={{ fontSize: Utils.getDimens(Dimens.FONT_CONTENT), color: Colors.COLOR_BLACK }} />
                    </View>
                    <Image source={Images.ic_arrow_right} />
                </View>
            </View>
        </TouchableOpacity>
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {

    },
    column: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});

NotificationComponent.propTypes = {
    dataIndex: PropTypes.object,
    onPress: PropTypes.func
}

NotificationComponent.defaultProps = {
    dataIndex: {
        avartaUrl: 'http://ec2-13-229-60-66.ap-southeast-1.compute.amazonaws.com/files/medias/file-1516880382084.jpg',
        desc: '<p>You have a meeting with <b>Cuongqv</b> at <b>3: 00 PM</b> to day</p> ',
    },
    onPress: (data) => { }
}

export default NotificationComponent;