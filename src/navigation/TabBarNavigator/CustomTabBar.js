import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// global
import {Colors, Img, AppStyles} from '../../configs/appConfig';

class CustomTabBar extends Component {
    render() {
        let navigation = this.props.navigation;
        let icons = [
            Img.ic_book,
            Img.ic_email,
            Img.ic_home,
            Img.ic_crown,
            Img.ic_chat
        ];

        const {routes, index} = navigation.state;

        return (
            <View style={styles.tabContainer}>
                {routes.map((route, idx) => {
                    const isActive = index === idx;

                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(route.routeName)}
                            style={[
                                styles.tab,
                                {backgroundColor: 'white'}
                            ]}
                            key={route.routeName}
                        >

                            {idx === 2 ? <View style={{
                                width: 42,
                                height: 42,
                                borderWidth: 1,
                                borderColor: Colors.COLOR_LIGHT_GRAY,
                                borderRadius: 21,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={icons[idx]}
                                    resizeMode="contain"
                                    style={[
                                        AppStyles.iconAction,
                                        {
                                            tintColor: isActive ? Colors.COLOR_BLUE : Colors.COLOR_LIGHT_GRAY,
                                            alignSelf: 'center'
                                        }
                                    ]}
                                />
                            </View> :
                                <Image
                                    source={icons[idx]}
                                    resizeMode="contain"
                                    style={[
                                        AppStyles.iconAction,
                                        {
                                            tintColor: isActive ? Colors.COLOR_BLUE : Colors.COLOR_LIGHT_GRAY,
                                            alignSelf: 'center'
                                        }
                                    ]}
                                />
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    tabContainer: {
        flexDirection: 'row',
        // borderTopWidth: 0.5,
        // borderTopColor: '$color_gray'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content',
    },
    tabLongText: {
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer
    };
};

export default connect(mapStateToProps)(CustomTabBar);
