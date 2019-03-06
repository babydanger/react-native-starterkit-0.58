import React, {Component} from 'react';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import HeaderWallet from '../components/headerhome';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import {Colors, Img, AppStyles} from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExtContainer ref={ref => (this.container = ref)} backgroundColor={Colors.COLOR_WHITE}>
                <HeaderWallet/>
                <ScrollView style={{paddingLeft: 8, paddingRight: 8}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.button, {marginLeft: 8}]}>
                            <Image source={Img.ic_cup} style={styles.iconTiny}/>
                            <Text style={styles.text}>12345678</Text>
                        </View>

                        <View style={[styles.button, {marginLeft: 12, marginRight: 12}]}>
                            <Image source={Img.ic_download} style={styles.iconTiny}/>
                            <Text style={styles.text}>12345678</Text>
                        </View>

                        <View style={[styles.button, {marginRight: 8}]}>
                            <Image source={Img.ic_star} style={styles.iconTiny}/>
                            <Text style={styles.text}>12345678</Text>
                        </View>
                    </View>

                    <Text style={[AppStyles.fontContent, AppStyles.fontColorGray, {
                        marginTop: 8,
                        flex: 1,
                        textAlign: 'center'
                    }]}>New Friends</Text>

                    <Card style={{borderRadius: 8}}>
                        <View style={{flexDirection: 'row', flex: 1, paddingTop: 12, paddingBottom: 12}}>
                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 1, marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
                                    <Thumbnail
                                        style={{width: 50, height: 50}}
                                        source={Img.ic_add}/>
                                    <Text style={[AppStyles.fontDescription, {marginTop: 4}]}>Add</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 1, marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
                                    <Thumbnail
                                        style={{width: 50, height: 50}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R3F0zjvspYR6U2xPPp0KTZngP9VACM3YmexDKtOhVjAyCYvk'}}/>

                                    <Text style={[AppStyles.fontDescription, {marginTop: 4}]}>Donal</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 1, marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
                                    <Thumbnail
                                        style={{width: 50, height: 50}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R3F0zjvspYR6U2xPPp0KTZngP9VACM3YmexDKtOhVjAyCYvk'}}/>

                                    <Text style={[AppStyles.fontDescription, {marginTop: 4}]}>Mickey</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 1, marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
                                    <Thumbnail
                                        style={{width: 50, height: 50}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R3F0zjvspYR6U2xPPp0KTZngP9VACM3YmexDKtOhVjAyCYvk'}}/>

                                    <Text style={[AppStyles.fontDescription, {marginTop: 4}]}>Mine</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 1, marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
                                    <Thumbnail
                                        style={{width: 50, height: 50}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R3F0zjvspYR6U2xPPp0KTZngP9VACM3YmexDKtOhVjAyCYvk'}}/>

                                    <Text style={[AppStyles.fontDescription, {marginTop: 4}]}>Lou</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <TouchableOpacity>
                        <View style={[styles.button, {
                            backgroundColor: Colors.COLOR_BLUE,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 12,
                            marginBottom: 12
                        }]}>
                            <Text style={[AppStyles.fontDescription, AppStyles.fontColorWhite, {alignSelf: 'center'}]}>My
                                Journal, I Grow, My Best
                                Memory</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={[AppStyles.fontContent, AppStyles.fontColorGray, {
                        flex: 1,
                        textAlign: 'center',
                        marginBottom: 8
                    }]}>Complete the tasks to gain reward</Text>

                    <Card style={{padding: 8}}>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <View style={[styles.viewRound, {backgroundColor: '#EEEEEE'}]}>
                                    <Image style={{width: 30, height: 30, tintColor: Colors.COLOR_YELLOW}}
                                        source={Img.ic_crown}
                                        resizeMode='contain'/>
                                </View>

                                <Text>Level</Text>

                                <View style={[styles.viewRound, {backgroundColor: 'blue'}]}>
                                    <Text>1</Text>
                                </View>

                            </View>
                        </View>
                    </Card>

                </ScrollView>
            </ExtContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: ' 100%',
        height: '100%',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '$color_blue',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom: 5,
    },
    iconTiny: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: 5
    },
    text: {
        marginLeft: 12,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.COLOR_HOT,
        fontSize: '$font_badget'
    },
    viewRound: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(HomeContainer);
