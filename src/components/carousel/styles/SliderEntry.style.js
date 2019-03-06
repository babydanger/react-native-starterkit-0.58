import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../styles/index.style';
import * as Dimens from '../../../configs/dimens';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = percentage * viewportWidth / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const entryBorderRadius = Dimens.RADIUS;

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        marginTop: 30
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: entryBorderRadius
    },
    imageContainerEven: {
        // backgroundColor: colors.black
        backgroundColor: 'transparent'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: entryBorderRadius
    }
});
