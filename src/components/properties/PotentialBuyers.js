import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { Title, Button } from 'native-base';
import I18n from 'react-native-i18n';

// global
import {
    Consts,
} from '../../configs/appConfig';

import styles from './PotentialBuyers.style';

// component
import CircleImage from '../_images/CircleImage';
import AppButton from '../../components/buttons/buttonApp/AppButton';

class PotentialBuyers extends Component {
    constructor(props) {
        super(props);
    }

    onViewAllPressed() {
        const { onViewAllPressed } = this.props;
        onViewAllPressed();
    }

    onReservationPressed() {
        console.log('Reservation pressed');
        const { onReservationPressed } = this.props;
        onReservationPressed();
    }

    renderItem(wrapperItem) {
        let item = wrapperItem.item;
        let rating = item.rating && item.rating != 0 ? I18n.t(`buyer_rating_${item.rating}`) : '';
        let ratingColor = item.rating && item.rating != 0 ? I18n.t(`buyer_rating_color_${item.rating}`) : 'transparent';
        return (
            <CircleImage
                text1={item.fullName ? item.fullName : ''}
                text2={rating}
                text2Style={{ color: ratingColor }}
                haveBorder={true}
            />
        );
    }

    render() {
        const { potentialBuyers, propertyDetail } = this.props;
        const requestPayment = propertyDetail && propertyDetail.requestPayment ? propertyDetail.requestPayment : [];
        return (
            <View style={styles.rootContainer}>
                {potentialBuyers && potentialBuyers.length > 0 ? (
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>{I18n.t('potential_buyers.header_title')}</Text>
                        <TouchableOpacity
                            style={styles.headerViewAllBtn}
                            onPress={() => {
                                this.onViewAllPressed();
                            }}
                        >
                            <Text style={styles.headerViewAllText}>{I18n.t('potential_buyers.view_all')}</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}
                {potentialBuyers && potentialBuyers.length > 0 ? (
                    <FlatList
                        style={styles.buyerList}
                        data={potentialBuyers}
                        // extraData={arr}
                        horizontal={true}
                        keyExtractor={(item, index) => index}
                        renderItem={wrapperItem => this.renderItem(wrapperItem)}
                    />
                ) : null}
                <View
                    style={[
                        styles.footerContainer,
                        { marginTop: potentialBuyers && potentialBuyers.length > 0 ? 15 : 0 }
                    ]}
                >
                    <AppButton
                        title={I18n.t('potential_buyers.reserve')}
                        textStyle={styles.footerBtnText}
                        buttonStyle={requestPayment && requestPayment.length > 0 ? { opacity: 0.7 } : { opacity: 1 }}
                        onPress={() => {
                            this.onReservationPressed();
                        }}
                        disabled={requestPayment && requestPayment.length > 0 ? true : false}
                    />
                </View>
            </View>
        );
    }
}

PotentialBuyers.defaultProps = {
    onReservationPressed: () => {},
    onViewAllPressed: () => {},
    potentialBuyers: []
};

export default PotentialBuyers;
