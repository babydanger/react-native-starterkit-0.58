import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
// global resources
// import { AppStyles, Consts, Dimens, Utils, Colors, HeaderUtils, Images } from '../../../configs/appConfig';
import styles from './AppButton.style';

class AppButton extends Component {
    render() {
        const { title, onPress, buttonStyle, textStyle } = this.props;
        return (
            <Button style={[styles.button, { ...buttonStyle }]} {...this.props}>
                <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
            </Button>
        );
    }
}

AppButton.defaultProps = {
    buttonStyle: {},
    textStyle: {},
    title: 'Button',
    onPress: () => {}
};

export default AppButton;
