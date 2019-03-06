import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
// global resources
// import { AppStyles, Consts, Dimens, Utils, Colors, HeaderUtils, Images } from '../../../configs/appConfig';
import styles from './RadioButton.style';

class RadioButton extends Component {
    render() {
        const { onPress, outerStyle, innerStyle, selected } = this.props;
        return (
            <Button style={[styles.outer, { ...outerStyle }]} onPress={onPress}>
                {selected && <View style={[styles.inner, { ...innerStyle }]} />}
            </Button>
        );
    }
}

RadioButton.defaultProps = {
    outerStyle: {},
    innerStyle: {},
    onPress: () => {}
};

export default RadioButton;
