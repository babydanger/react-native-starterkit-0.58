import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import moment from 'moment';

// global
import { AppStyles, Consts, Dimens, Utils, Colors, Images, Configs } from '../../configs/appConfig';

// component
import CirclePaymentProcess from '../circle/CirclePaymentProcess';
import Line from '../lines/Line';

let intervalId = -1;
let timeoutId = -1;
let diffTime = -1;
let remaningTime = -1;

class PaymentProcess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: {
                status: 'pending',
                label: '1',
                bgColor: Colors.COLOR_WHITE,
                disabled: true
            },
            step2: {
                status: 'pending',
                label: '2',
                bgColor: Colors.COLOR_WHITE,
                disabled: true
            },
            step3: {
                status: 'pending',
                label: '3',
                bgColor: Colors.COLOR_WHITE,
                disabled: true
            }
        };
    }

    componentWillMount() {
        /**
         * step.status == null -> done
         */
        const { propertyDetail } = this.props;
        this.analyzeStatusToSteps(propertyDetail);
        // this.startClockTimer(propertyDetail);
    }

    componentWillUnmount() {
        if (intervalId != -1) {
            clearInterval(intervalId);
        }
        if (timeoutId != -1) {
            clearTimeout(timeoutId);
        }
    }

    componentWillReceiveProps(props) {
        const { propertyDetail } = props;
        this.setState({ isLoading: false });

        this.analyzeStatusToSteps(propertyDetail);
        // this.setState({ isLoading: false });
    }

    startClockTimer(requestPayment, step) {
        if (requestPayment) {
            if (intervalId != -1) {
                diffTime = -1;
                remaningTime = -1;
                clearInterval(intervalId);
            }

            let process = requestPayment;
            let timeRequest = process.timeRequest ? moment(process.timeRequest) : null;

            if (timeRequest && step) {
                let now = moment();
                let endTime = moment(timeRequest.add(48, 'hours'));
                let duration = moment.duration(endTime.diff(now));
                var minutes = duration.asMinutes();

                diffTime = minutes;
                remaningTime = minutes;
                let floorMinutes = Math.floor(diffTime);
                let secondsLeft = (diffTime - floorMinutes) * 60;
                let display = Utils.getHourMinuteFromMinutes(remaningTime);
                console.log('Diff time: ', diffTime, secondsLeft);

                if (step == 1) {
                    this.setState({
                        step1: {
                            ...this.state.step1,
                            remaningTime: display
                        }
                    });
                } else if (step == 2) {
                    this.setState({
                        step2: {
                            ...this.state.step2,
                            remaningTime: display
                        }
                    });
                }

                if (timeoutId != -1) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    console.log('Start ticking');
                    intervalId = setInterval(() => {
                        remaningTime--;
                        if (remaningTime < 0) {
                            clearInterval(intervalId);
                            return;
                        }
                        let display = Utils.getHourMinuteFromMinutes(remaningTime);
                        if (step == 1) {
                            this.setState({
                                step1: {
                                    ...this.state.step1,
                                    remaningTime: display
                                }
                            });
                        } else if (step == 2) {
                            this.setState({
                                step2: {
                                    ...this.state.step2,
                                    remaningTime: display
                                }
                            });
                        }
                    }, 60 * 1000);
                }, secondsLeft * 1000);
            }
        }
    }

    analyzeStatusToSteps(propertyDetail) {
        const requestPayment = propertyDetail && propertyDetail.requestPayment ? propertyDetail.requestPayment : null;
        if (requestPayment && requestPayment.length > 0) {
            const reversedPayment = requestPayment.filter(item => {
                return item.type == Consts.PRICE_STATUS_RESERVED;
            });
            const unconditionalPayment = requestPayment.filter(item => {
                return item.type == Consts.PRICE_STATUS_UNCONDITIONAL_EXCHANGES;
            });
            const settlePayment = requestPayment.filter(item => {
                return item.type == Consts.PRICE_STATUS_SETTLED;
            });
            if (settlePayment && settlePayment.length > 0) {
                if (settlePayment[0].status == 1) {
                    this.setState({
                        step1: {
                            status: 'done',
                            label: '1',
                            bgColor: Colors.COLOR_WHITE,
                            disabled: true
                        },
                        step2: {
                            status: 'done',
                            label: '2',
                            bgColor: Colors.COLOR_WHITE,
                            disabled: true
                        },
                        step3: {
                            status: 'done',
                            label: '3',
                            bgColor: Colors.COLOR_WHITE,
                            disabled: true
                        }
                    });
                } else {
                    this.setState({
                        step1: {
                            status: 'done',
                            label: '1',
                            bgColor: Colors.COLOR_WHITE,
                            disabled: true
                        },
                        step2: {
                            status: 'done',
                            label: '2',
                            bgColor: Colors.COLOR_WHITE,
                            disabled: true
                        },
                        step3: {
                            status: 'processing',
                            label: '3',
                            bgColor: Colors.COLOR_YELLOW,
                            disabled: true
                        }
                    });
                }
                return;
            } else if (unconditionalPayment && unconditionalPayment.length > 0) {
                if (unconditionalPayment[0].status == 1) {
                    this.setState(
                        {
                            step1: {
                                status: 'done',
                                label: '1',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            },
                            step2: {
                                status: 'done',
                                label: '2',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true,
                                remaningTime: '00:00'
                            },
                            step3: {
                                status: 'processing',
                                label: '3',
                                bgColor: Colors.COLOR_YELLOW,
                                disabled: false
                            }
                        },
                        () => {
                            this.startClockTimer(unconditionalPayment[0], 2);
                        }
                    );
                } else {
                    this.setState(
                        {
                            step1: {
                                status: 'done',
                                label: '1',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            },
                            step2: {
                                status: 'processing',
                                label: '2',
                                bgColor: Colors.COLOR_YELLOW,
                                disabled: true,
                                remaningTime: '00:00'
                            },
                            step3: {
                                status: 'pending',
                                label: '3',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            }
                        },
                        () => {
                            this.startClockTimer(unconditionalPayment[0], 2);
                        }
                    );
                }
                return;
            } else if (reversedPayment && reversedPayment.length > 0) {
                if (reversedPayment[0].status == 1) {
                    this.setState(
                        {
                            step1: {
                                status: 'done',
                                label: '1',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true,
                                remaningTime: '00:00'
                            },
                            step2: {
                                status: 'processing',
                                label: '2',
                                bgColor: Colors.COLOR_YELLOW,
                                disabled: false
                            },
                            step3: {
                                status: 'pending',
                                label: '3',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            }
                        },
                        () => {
                            this.startClockTimer(reversedPayment[0], 1);
                        }
                    );
                } else {
                    this.setState(
                        {
                            step1: {
                                status: 'processing',
                                label: '1',
                                bgColor: Colors.COLOR_YELLOW,
                                disabled: true,
                                remaningTime: '00:00'
                            },
                            step2: {
                                status: 'pending',
                                label: '2',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            },
                            step3: {
                                status: 'pending',
                                label: '3',
                                bgColor: Colors.COLOR_WHITE,
                                disabled: true
                            }
                        },
                        () => {
                            this.startClockTimer(reversedPayment[0], 1);
                        }
                    );
                }
                return;
            }
        }
    }

    onProcessPressed(step) {
        const { onProcessPressed, propertyDetail } = this.props;
        const requestPayment = propertyDetail && propertyDetail.requestPayment ? propertyDetail.requestPayment : null;
        const buyerCustomId = requestPayment && requestPayment.length > 0 ? requestPayment[0].buyer_custom_id : null;
        onProcessPressed(step, buyerCustomId);
    }

    render() {
        const { propertyDetail, buyerDetail } = this.props;
        const { step1, step2, step3 } = this.state;
        const avatar =
            buyerDetail && buyerDetail.avatar
                ? { uri: Configs.BASE_URL + (buyerDetail.avatar.startsWith('/') ? '' : '/') + buyerDetail.avatar }
                : Images.ic_account_active;
        const propertyName = propertyDetail && propertyDetail.name ? propertyDetail.name : '';
        const buyerName = buyerDetail && buyerDetail.fullName ? buyerDetail.fullName : '';
        const displayDesc =
            buyerName + ' ' + I18n.t('property_detail.payment_process_description') + ' ' + propertyName;

        return (
            <View style={[AppStyles.containerColumn, AppStyles.paddingLayout, AppStyles.bgWhite]}>
                <View style={[AppStyles.containerRow]}>
                    <Text style={[AppStyles.fontContent, AppStyles.fontBold, { flex: 1 }]}>
                        {I18n.t('payment_process')}
                    </Text>
                    <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.props.onViewDetailPressed}>
                        <Text style={[AppStyles.fontContent, AppStyles.fontColorRed]}>{I18n.t('view_detail')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[AppStyles.containerRow, AppStyles.paddingLayoutTop, AppStyles.paddingLayoutBottom]}>
                    <View>
                        <View style={[AppStyles.avatarSmall]} />
                        <Image
                            source={avatar}
                            defaultSource={Images.ic_account_active}
                            style={[
                                AppStyles.avatarSmall,
                                { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }
                            ]}
                        />
                    </View>
                    <Text style={[AppStyles.fontDescription, AppStyles.paddingLayoutLeft, { flex: 1 }]}>
                        {displayDesc}
                    </Text>
                </View>

                <View style={[AppStyles.containerRow, AppStyles.paddingLayout, { alignItems: 'center' }]}>
                    <CirclePaymentProcess
                        backgroundColor={step1 ? step1.bgColor : Colors.COLOR_WHITE}
                        text={step1.status != 'done' ? step1.label : null}
                        textColor={step1 && step1.status == 'pending' ? Colors.COLOR_BLACK : Colors.COLOR_WHITE}
                        disabled={!step1 || step1.disabled ? true : false}
                        onPress={() => {
                            this.onProcessPressed(Consts.PRICE_STATUS_RESERVED);
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <Line />
                    </View>
                    <CirclePaymentProcess
                        backgroundColor={step2 ? step2.bgColor : Colors.COLOR_WHITE}
                        textColor={step2 && step2.status == 'pending' ? Colors.COLOR_BLACK : Colors.COLOR_WHITE}
                        text={step2.status != 'done' ? step2.label : null}
                        disabled={!step2 || step2.disabled ? true : false}
                        onPress={() => {
                            this.onProcessPressed(Consts.PRICE_STATUS_UNCONDITIONAL_EXCHANGES);
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <Line />
                    </View>
                    <CirclePaymentProcess
                        backgroundColor={step3 ? step3.bgColor : Colors.COLOR_WHITE}
                        textColor={step3 && step3.status == 'pending' ? Colors.COLOR_BLACK : Colors.COLOR_WHITE}
                        text={step3.status != 'done' ? step3.label : null}
                        disabled={!step3 || step3.disabled ? true : false}
                        onPress={() => {
                            this.onProcessPressed(Consts.PRICE_STATUS_SETTLED);
                        }}
                    />
                </View>

                <View style={[AppStyles.containerRow, { alignItems: 'flex-start', paddingLeft: 5, paddingRight: 10 }]}>
                    <View>
                        <Text style={[AppStyles.fontBadget]}>{I18n.t('price_status_2')}</Text>
                        {step1 && step1.remaningTime ? (
                            <Text style={[AppStyles.fontBadget, AppStyles.fontColorLabel, AppStyles.paddingSmallTop]}>
                                {I18n.t('end_time')}
                            </Text>
                        ) : null}
                        {step1 && step1.remaningTime ? (
                            <Text style={[AppStyles.fontBadget, AppStyles.fontColorRed, AppStyles.paddingSmallTop]}>
                                {step1.remaningTime}
                            </Text>
                        ) : null}
                    </View>
                    <View style={{ flex: 1 }} />
                    <View>
                        <Text style={[AppStyles.fontBadget, { maxWidth: 80, textAlign: 'center' }]}>
                            {I18n.t('price_status_1')}
                        </Text>
                        {step2 && step2.remaningTime ? (
                            <Text style={[AppStyles.fontBadget, AppStyles.fontColorLabel, AppStyles.paddingSmallTop]}>
                                {I18n.t('end_time')}
                            </Text>
                        ) : null}
                        {step2 && step2.remaningTime ? (
                            <Text style={[AppStyles.fontBadget, AppStyles.fontColorRed, AppStyles.paddingSmallTop]}>
                                {step2.remaningTime}
                            </Text>
                        ) : null}
                    </View>
                    <View style={{ flex: 1 }} />
                    <View>
                        <Text style={[AppStyles.fontBadget]}>{I18n.t('price_status_5')}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
});

PaymentProcess.propTypes = {
    onPress: PropTypes.func,
    payment: PropTypes.shape({
        avatar: PropTypes.string,
        description: PropTypes.string,
        stepTwo: PropTypes.string,
        endTime: PropTypes.string
    })
};

PaymentProcess.defaultProps = {
    onPress: payment => {},
    payment: {
        avatar: '/files/medias/file-1515574217491.jpg',
        description: 'Amy Mullinax started payment process Room 107',
        stepTwo: '',
        stepThree: '3',
        endTime: '47:55'
    },
    propertyDetail: {
        status: 1,
        endTime: '47:55'
    },
    onProcessPressed: () => {},
    onViewDetailPressed: () => {}
};

export default PaymentProcess;
