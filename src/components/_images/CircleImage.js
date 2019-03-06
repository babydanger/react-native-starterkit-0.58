import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './CircleImage.style';

import {
    AppStyles,
    Consts,
    Storage,
    Dimens,
    Utils,
    Colors,
    HeaderUtils,
    Images,
    Configs
} from '../../configs/appConfig';

class CircleImage extends Component {
    render() {
        const { imageStyle, source, text1, text2, haveBorder, borderColor, text2Style, text1Style } = this.props;
        let borderStyle = haveBorder ? { borderColor: borderColor, borderWidth: 3 } : {};        
        return (
            <View style={styles.rootContainer}>
                <Image
                    style={[borderStyle, imageStyle]}
                    borderRadius={35}
                    defaultSource={Images.ic_image}
                    resizeMode={'cover'}
                    source={source ? source : Images.ic_image}
                />
                {text1 ? (
                    <Text style={styles.text1} ellipsizeMode={'tail'} numberOfLines={1}>
                        {text1}
                    </Text>
                ) : null}
                {text2 != null && typeof text2 != 'undefined' ? (
                    <Text
                        style={[styles.text2, text2Style ? { ...text2Style } : {}]}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                    >
                        {text2}
                    </Text>
                ) : null}
            </View>
        );
    }
}

CircleImage.defaultProps = {
    imageStyle: styles.image,
    source: Images.ic_image,
    haveBorder: false,
    borderColor: Colors.COLOR_YELLOW,
    text1: null,
    text2: null
};

export default CircleImage;
