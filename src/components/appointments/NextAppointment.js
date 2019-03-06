import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import moment from 'moment';
// global
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

// component
import Column from '../lines/Column';

class NextAppointment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { appointment } = this.props;

        return (
            <View style={[styles.container]}>
                <View style={[AppStyles.containerRow]}>
                    <Image source={Images.ic_appointment} />
                    <Text style={[AppStyles.fontContent, AppStyles.marginLayoutLeft]}>
                        {I18n.t('next_appointment')}
                    </Text>
                </View>
                <View style={[AppStyles.containerRow, AppStyles.paddingContentTop, AppStyles.paddingContentBottom]}>
                    <View style={[styles.columnOne, AppStyles.marginContentRight]}>
                        <Text style={[AppStyles.fontTitle]}>
                            {moment(appointment.date, 'YYYY-MM-DD').format('MMM')}
                        </Text>
                        <Text style={[AppStyles.fontTitle, AppStyles.fontColorRed, AppStyles.marginContentTop]}>
                            {moment(appointment.date, 'YYYY-MM-DD').format('DD')}
                        </Text>
                    </View>
                    <Column backgroundColor={Colors.COLOR_BLACK} height={50} width={2} />
                    <View style={[styles.columnTwo, AppStyles.paddingContent]}>
                        <Text style={[AppStyles.fontContent, AppStyles.fontBold, AppStyles.fontColorYellow]}>
                            {`${moment(appointment.startTime, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm')} ${I18n.t(
                                'to'
                            )} ${moment(appointment.endTime, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm')}`}
                        </Text>
                        <View style={[AppStyles.containerRow, AppStyles.marginContentTop]}>
                            <Image source={Images.ic_location_black} />
                            <Text
                                style={[
                                    AppStyles.fontDescription,
                                    AppStyles.marginContentLeft,
                                    AppStyles.fontColorLabel
                                ]}
                            >
                                {appointment.location}
                            </Text>
                        </View>
                        <View style={[AppStyles.containerRow, AppStyles.marginContentTop]}>
                            <Image source={Images.ic_user_black} />
                            <Text
                                style={[
                                    AppStyles.fontDescription,
                                    AppStyles.marginContentLeft,
                                    AppStyles.fontColorLabel
                                ]}
                            >
                                {appointment.buyer.fullName}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flexDirection: 'column',
        padding: '$padding_layout*3',
        backgroundColor: '$color_white'
    },
    columnOne: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    columnTwo: {
        flex: 1,
        flexDirection: 'column'
    }
});

NextAppointment.propTypes = {
    appointment: PropTypes.shape({
        buyer: PropTypes.shape({
            avatar: PropTypes.string,
            fullName: PropTypes.string,
            id: PropTypes.number
        }),
        buyer_id: PropTypes.number,
        date: PropTypes.string,
        descriptions: PropTypes.string,
        endTime: PropTypes.string,
        id: PropTypes.number,
        location: PropTypes.string,
        note: PropTypes.string,
        reminder: PropTypes.string,
        sale_id: PropTypes.number,
        startTime: PropTypes.string,
        status: PropTypes.any
    })
};

NextAppointment.defaultProps = {
    appointment: {
        buyer: {
            avatar: 'files/static/default-avatar.png',
            fullName: 'Dan Nguyen Nguyen',
            id: 70
        },
        buyer_id: 70,
        date: '2018-01-22',
        descriptions: '',
        endTime: '2018-01-22T16:19:00.000Z',
        id: 13,
        location: 'Tran Thai Tong',
        note: 'Khong Biet',
        reminder: '19:19',
        sale_id: 1,
        startTime: '2018-01-22T12:19:00.000Z',
        status: null
    }
};

export default NextAppointment;
