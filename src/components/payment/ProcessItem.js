import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'native-base';
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
    QS,
    Configs
} from '../../configs/appConfig';

// component
import CirclePaymentProcess from '../circle/CirclePaymentProcess';
import Column from '../lines/Column';
import style from './ProcessItem.style';

class ProcessItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { process, title, onPress, sendTitle } = this.props;

        let now = moment();
        let timeRequest = process.timeRequest ? moment(process.timeRequest) : null;
        let timeApprove = process.timeApprove ? moment(process.timeApprove) : null;
        // let title = I18n.t('price_status_' + process.type);

        let sellerText = timeRequest ? `Seller sent ${title} Request` : null;
        let agentText = timeApprove ? 'Agent approved' : null;

        return (
            <View style={[{ width: '100%', flexDirection: 'row' }, AppStyles.bgWhite]}>
                <View style={[styles.columnOne]}>
                    <Text style={[AppStyles.fontContent]}>{timeRequest ? timeRequest.format('MMM') : ''}</Text>
                    <Text style={[AppStyles.fontContent]}>{timeRequest ? timeRequest.format('DD') : ''}</Text>
                </View>
                <View style={[styles.columnTwo]}>
                    <CirclePaymentProcess
                        disabled={!process || process.disabled ? true : false}
                        backgroundColor={process ? process.bgColor : Colors.COLOR_WHITE}
                        text={process.status_process != 'done' ? process.label : null}
                        textColor={
                            process && process.status_process == 'pending' ? Colors.COLOR_BLACK : Colors.COLOR_WHITE
                        }
                        onPress={() => {
                            onPress(process);
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <Column />
                    </View>
                </View>
                <View style={[styles.columnThree]}>
                    <View style={[AppStyles.containerRow]}>
                        <Text style={[AppStyles.fontContent, AppStyles.fontBold, { flex: 1 }]}>{title}</Text>
                        <Text style={[AppStyles.fontContent, AppStyles.fontColorRed]}>{process.remaningTime}</Text>
                    </View>

                    {!process.disabled && (
                        <TouchableOpacity
                            style={style.requestBtn}
                            onPress={() => {
                                onPress(process);
                            }}
                        >
                            <View>
                                <Text style={style.text1}>{sendTitle ? sendTitle : ''}</Text>
                                <Text style={style.text2}>{now.format('MMM DD, YYYY hh:mm A')}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {sellerText && (
                        <Text style={[AppStyles.fontDescription, AppStyles.marginLayoutTop]}>{sellerText}</Text>
                    )}
                    {timeRequest && (
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {timeRequest.format('MMM DD, YYYY hh:mm A')}
                        </Text>
                    )}
                    {agentText && (
                        <Text style={[AppStyles.fontDescription, AppStyles.marginLayoutTop]}>{agentText}</Text>
                    )}
                    {timeApprove && (
                        <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>
                            {timeApprove.format('MMM DD, YYYY hh:mm A')}
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    columnOne: {
        flex: 1.5,
        alignItems: 'flex-end'
    },
    columnTwo: {
        width: '$size_avatar_small+$padding_layout',
        alignItems: 'center'
    },
    columnThree: {
        flex: 7,
        // padding: '$padding_layout',
        paddingTop: 5,
        paddingBottom: '$padding_layout*4',
        paddingHorizontal: 5
    }
});

ProcessItem.propTypes = {
    process: PropTypes.shape({
        month: PropTypes.string,
        day: PropTypes.string,
        title: PropTypes.string,
        time: PropTypes.string,
        seller: PropTypes.string,
        sellerDate: PropTypes.string,
        agent: PropTypes.string,
        agentDate: PropTypes.string
    })
};

ProcessItem.defaultProps = {
    process: {
        month: 'Sep',
        day: '20',
        title: 'Available',
        time: '10:20',
        seller: 'Seller sent Reservation Request',
        sellerDate: 'Sep 25, 2017  10:00 AM',
        agent: 'Agent approved ',
        agentDate: 'Sep 25, 2017  11:00 AM'
    },
    onPress: () => {}
};

export default ProcessItem;
