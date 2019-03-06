import PropTypes from 'prop-types';
import {Img, AppStyles, Dimens} from '../../configs/appConfig';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {Thumbnail} from 'native-base';
import React, {Component} from 'react';
import App from '../../App';

class HeaderWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {onPressCheckIn, onPressProfile, navigation} = this.props;

        return (
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: Platform.OS === 'android' ? 0 : Dimens.PADDING_LAYOUT,
                backgroundColor: 'white',
                padding: 8
            }}>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={Img.ic_wings}
                            style={{width: 50, height: 25}}
                            resizeMode="stretch"
                        />
                        <Text style={AppStyles.fontBadget}>
                            Check in
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style={AppStyles.fontHeader}>
                    Sgrout Diary
                </Text>

                <TouchableOpacity>
                    <View>
                        <Thumbnail
                            style={{width: 45, height: 45, marginRight: 5}}
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R3F0zjvspYR6U2xPPp0KTZngP9VACM3YmexDKtOhVjAyCYvk'}}/>

                        <View style={{
                            position: 'absolute',
                            top: 8,
                            right: 0,
                            backgroundColor: '#F7AF09',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 20,
                            height: 20,
                            borderRadius: 10
                        }}>
                            <Text style={[AppStyles.fontBadget, AppStyles.fontColorWhite]} numberOfLines={1}>2</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

HeaderWallet.propTypes = {
    wallet: PropTypes.string,
    style: PropTypes.any,
    navigation: PropTypes.object
};

export default HeaderWallet;
