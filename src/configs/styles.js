import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';
import * as Dimens from './dimens';
import * as Colors from './colors';
import * as Consts from './consts';

// build style sheet
EStyleSheet.build({
    // colors
    $color_black: Colors.COLOR_BLACK,
    $color_white: Colors.COLOR_WHITE,
    $color_red: Colors.COLOR_RED,
    $color_label: Colors.COLOR_LABEL,
    $color_menu_header: Colors.COLOR_MENU_HEADER,
    $color_gray: Colors.COLOR_GRAY,
    $color_green: Colors.COLOR_GREEN,
    $color_light_gray: Colors.COLOR_LIGHT_GRAY,
    $color_blue: Colors.COLOR_BLUE,
    $color_yellow: Colors.COLOR_YELLOW,
    $color_hot: Colors.COLOR_HOT,
    $color_warm: Colors.COLOR_WARM,
    $color_cold: Colors.COLOR_COLD,
    // font
    $font_header: Dimens.FONT_HEADER,
    $font_title: Dimens.FONT_TITLE,
    $font_content: Dimens.FONT_CONTENT,
    $font_description: Dimens.FONT_DESCRIPTION,
    $font_menu: Dimens.FONT_MENU,
    $font_badget: Dimens.FONT_BADGET,
    // radius
    $radius: Dimens.RADIUS,
    $radius_action: Dimens.RADIUS_BG,
    $radius_background: Dimens.RADIUS_BG,
    $radius_shadow: Dimens.RADIUS_SHADOW,
    $radius_input: Dimens.RADIUS_INPUT,
    // size icon
    $size_icon_more: Dimens.SIZE_MENU_MORE,
    $size_icon_width: Dimens.SIZE_ICON_WIDTH,
    $size_icon_height: Dimens.SIZE_ICON_HEIGHT,
    $size_icon_tab_width: Dimens.SIZE_TAB_WIDTH,
    $size_icon_tab_height: Dimens.SIZE_TAB_HEIGHT,
    $size_icon_menu: Dimens.SIZE_ICON_MENU,
    $size_icon_action: Dimens.SIZE_ICON_ACTION,
    // avatar
    $size_avatar_large: Dimens.SIZE_AVATAR_LARGE,
    $size_avatar_normal: Dimens.SIZE_AVATAR_NORMAL,
    $size_avatar_small: Dimens.SIZE_AVATAR_SMALL,
    $border_avatar: Dimens.BORDER_AVATAR,
    // image
    $size_image_width: Dimens.SIZE_IMAGE_WIDTH,
    $size_image_height: Dimens.SIZE_IMAGE_HEIGHT,
    $size_image_slide_width: Dimens.SIZE_IMAGE_SLIDE_WIDTH,
    $size_image_slide_height: Dimens.SIZE_IMAGE_SLIDE_HEIGHT,
    $size_image_slide_width_small: Dimens.SIZE_IMAGE_SLIDE_WIDTH_SMALL,
    $size_image_slide_height_small: Dimens.SIZE_IMAGE_SLIDE_HEIGHT_SMALL,
    // dimens
    $ios_Status_bar: Dimens.IOS_STATUS_BAR,
    $ios_Status_bar_X: Dimens.IOS_STATUS_BAR_IPHONEX,
    // padding
    $padding_layout: Dimens.PADDING_LAYOUT,
    $padding_content: Dimens.PADDING_CONTENT,
    $padding_small: Dimens.PADDING_SMALL,
    // action, input
    $button_size_width: Dimens.BUTTON_SIZE,
    $button_size_action: Dimens.BUTTON_SIZE_ACTION,
    $height_input_text: Dimens.HEIGHT_INPUT_TEXT,
    // agent 
    $height_agent_detail_avatar: Dimens.HEIGHT_AGENT_DETAIL_AVATAR
});

// create style sheet for project
const styles = EStyleSheet.create({
    // $outline: 1,
    root: {
        flex: 1,
        backgroundColor: 'rgb(244,244,244)'
    },
    header: {},
    container: {
        // padding: '$padding_content',
        flex: 1
        // backgroundColor: '$color_white'
    },
    containerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerColumn: {
        width: '100%',
        flexDirection: 'column'
    },
    footer: {},
    scrollView: {
        width: '100%',
        height: '100%'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    avatarLarge: {
        width: '$size_avatar_large',
        height: '$size_avatar_large',
        borderRadius: '$size_avatar_large/2',
        borderColor: '$color_yellow',
        borderWidth: '$border_avatar'
    },
    avatarMedium: {
        width: '$size_avatar_normal',
        height: '$size_avatar_normal',
        borderRadius: '$size_avatar_normal/2',
        borderColor: '$color_yellow',
        borderWidth: '$border_avatar'
    },
    avatarSmall: {
        width: '$size_avatar_small',
        height: '$size_avatar_small',
        borderRadius: '$size_avatar_small/2',
        borderColor: '$color_yellow',
        borderWidth: '$border_avatar'
    },
    iconCamera: {
        width: '$size_avatar_small/2',
        height: '$size_avatar_small/2',
    },
    icon: {
        width: '$size_icon_width',
        height: '$size_icon_height'
    },
    iconAction: {
        width: '$size_icon_action',
        height: '$size_icon_action'
    },
    image: {
        width: '$size_image_width',
        height: '$size_image_height'
    },
    imageSlide: {
        width: '$size_image_slide_width',
        height: '$size_image_slide_height'
    },
    imageSlideSmall: {
        width: '$size_image_slide_width_small',
        height: '$size_image_slide_height_small'
    },
    buttonRed: {
        margin: '$padding_layout*2',
        width: '$button_size_width',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: '$padding_content',
        borderRadius: '$radius',
        backgroundColor: 'red'
    },
    buttonWhiteBorderRed: {
        width: '$button_size_action',
        borderRadius: '$radius',
        backgroundColor: '$color_white',
        borderColor: '$color_red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWhiteBorderGray: {
        width: '$button_size_action',
        borderRadius: '$radius',
        backgroundColor: '$color_white',
        borderColor: '$color_gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonApp: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: '$radius',
        padding: '$padding_content',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: '$radius_shadow',
        shadowOpacity: 1.0
    },
    buttonFlat: {
        padding: '$padding_layout',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: '$padding_layout',
        width: '$size_icon_more',
        height: '$size_icon_more',
        borderRadius: '$size_icon_more/2',
        borderColor: 'white',
        borderWidth: '$border_avatar'
    },
    bgWhite: {
        backgroundColor: '$color_white'
    },
    bgRed: {
        backgroundColor: '$color_red'
    },
    bgGray: {
        backgroundColor: '$color_gray'
    },
    bgWhiteRadius: {
        backgroundColor: '$color_white',
        borderRadius: '$radius_background'
    },
    bgGreenRadius: {
        backgroundColor: '$color_green',
        borderRadius: '$radius_background'
    },
    bgYellowRadius: {
        backgroundColor: '$color_yellow',
        borderRadius: '$radius_background'
    },
    marginLayout: {
        margin: '$padding_layout'
    },
    marginLayoutLeft: {
        marginLeft: '$padding_layout'
    },
    marginLayoutTop: {
        marginTop: '$padding_layout'
    },
    marginLayoutRight: {
        marginRight: '$padding_layout'
    },
    marginLayoutBottom: {
        marginBottom: '$padding_layout'
    },
    marginContent: {
        margin: '$padding_content'
    },
    marginContentLeft: {
        marginLeft: '$padding_content'
    },
    marginContentTop: {
        marginTop: '$padding_content'
    },
    marginContentRight: {
        marginRight: '$padding_content'
    },
    marginContentBottom: {
        marginBottom: '$padding_content'
    },
    paddingLayout: {
        padding: '$padding_layout'
    },
    paddingLayoutLeft: {
        paddingLeft: '$padding_layout'
    },
    paddingLayoutRight: {
        paddingRight: '$padding_layout'
    },
    paddingLayoutTop: {
        paddingTop: '$padding_layout'
    },
    paddingLayoutBottom: {
        paddingBottom: '$padding_layout'
    },
    paddingContent: {
        padding: '$padding_content'
    },
    paddingContentLeft: {
        paddingLeft: '$padding_content'
    },
    paddingContentRight: {
        paddingRight: '$padding_content'
    },
    paddingContentTop: {
        paddingTop: '$padding_content'
    },
    paddingContentBottom: {
        paddingBottom: '$padding_content'
    },
    paddingSmall: {
        padding: '$padding_small'
    },
    paddingSmallLeft: {
        paddingLeft: '$padding_small'
    },
    paddingSmallTop: {
        paddingTop: '$padding_small'
    },
    paddingSmallRight: {
        paddingRight: '$padding_small'
    },
    paddingSmallBottom: {
        paddingBottom: '$padding_small'
    },
    // font style
    fontHeader: {
        fontSize: '$font_header',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontTitle: {
        fontSize: '$font_title',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontContent: {
        fontSize: '$font_content',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontDescription: {
        fontSize: '$font_description',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontBadget: {
        fontSize: '$font_badget',
        backgroundColor: 'transparent'
    },
    fontMenu: {
        fontSize: '$font_menu',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontColorWhite: {
        color: '$color_white'
    },
    fontColorBlack: {
        color: '$color_black'
    },
    fontColorRed: {
        color: '$color_red'
    },
    fontColorGray: {
        color: '$color_gray'
    },
    fontColorLabel: {
        color: '$color_label'
    },
    fontColorBlue: {
        color: '$color_blue'
    },
    fontColorYellow: {
        color: '$color_yellow'
    },
    fontBold: {
        fontWeight: 'bold'
    },
    fontColorHot: {
        color: 'red'
    },
    fontColorWarm: {
        color: '$color_warm'
    },
    fontColorCold: {
        color: '$color_cold'
    },
    '@media (max-width: 350)': {
        // media query on sheet level    
        // font        
        $font_header: Dimens.FONT_HEADER,
        $font_title: Dimens.FONT_TITLE,
        $font_content: Dimens.FONT_CONTENT,
        $font_description: Dimens.FONT_DESCRIPTION,
        $font_menu: Dimens.FONT_MENU,
        $font_badget: Dimens.FONT_BADGET,
        // radius
        $radius: Dimens.RADIUS,
        $radius_action: Dimens.RADIUS_BG,
        $radius_background: Dimens.RADIUS_BG,
        // size icon
        $size_icon_width: Dimens.SIZE_ICON_WIDTH,
        $size_icon_height: Dimens.SIZE_ICON_HEIGHT,
        $size_icon_tab_width: Dimens.SIZE_TAB_WIDTH,
        $size_icon_tab_height: Dimens.SIZE_TAB_HEIGHT,
        $size_icon_menu: Dimens.SIZE_ICON_MENU,
        $size_icon_action: Dimens.SIZE_ICON_ACTION,
        // avatar
        $size_avatar_large: Dimens.SIZE_AVATAR_LARGE,
        $size_avatar_normal: Dimens.SIZE_AVATAR_NORMAL,
        $size_avatar_small: Dimens.SIZE_AVATAR_SMALL,
        // dimens
        $padding_layout: Dimens.PADDING_LAYOUT,
        $padding_content: Dimens.PADDING_CONTENT,
        $button_size_width: Dimens.BUTTON_SIZE,
        $width_label: Dimens.WIDTH_LABEL,
        $size_wifi: Dimens.SIZE_WIFI,
        $size_action_call_bottom: Dimens.SIZE_ACTION_CALL_BOTTOM,
        $size_action_call_bottom_menu: Dimens.SIZE_ACTION_CALL_MENU,
        $button_size_action: Dimens.BUTTON_SIZE_ACTION,
        $height_input_text: Dimens.HEIGHT_INPUT_TEXT
    },
    '@media (min-width: 350) and (max-width: 500)': {
        // media query on sheet level
        // font
        $font_header: Math.ceil(Dimens.FONT_HEADER * Dimens.SCALE_2X),
        $font_title: Math.ceil(Dimens.FONT_TITLE * Dimens.SCALE_2X),
        $font_content: Math.ceil(Dimens.FONT_CONTENT * Dimens.SCALE_2X),
        $font_description: Math.ceil(Dimens.FONT_DESCRIPTION * Dimens.SCALE_2X),
        $font_menu: Math.ceil(Dimens.FONT_MENU * Dimens.SCALE_2X),
        $font_badget: Math.ceil(Dimens.FONT_BADGET * Dimens.SCALE_2X),
        // radius
        $radius: Math.ceil(Dimens.RADIUS * Dimens.SCALE_2X),
        $radius_action: Math.ceil(Dimens.RADIUS_BG * Dimens.SCALE_2X),
        $radius_background: Math.ceil(Dimens.RADIUS_BG * Dimens.SCALE_2X),
        // size icon
        $size_icon_width: Math.ceil(Dimens.SIZE_ICON_WIDTH * Dimens.SCALE_2X),
        $size_icon_height: Math.ceil(Dimens.SIZE_ICON_HEIGHT * Dimens.SCALE_2X),
        $size_icon_tab_width: Math.ceil(Dimens.SIZE_TAB_WIDTH * Dimens.SCALE_2X),
        $size_icon_tab_height: Math.ceil(Dimens.SIZE_TAB_HEIGHT * Dimens.SCALE_2X),
        $size_icon_menu: Math.ceil(Dimens.SIZE_ICON_MENU * Dimens.SCALE_2X),
        $size_icon_action: Math.ceil(Dimens.SIZE_ICON_ACTION * Dimens.SCALE_2X),
        // avatar
        $size_avatar_large: Math.ceil(Dimens.SIZE_AVATAR_LARGE * Dimens.SCALE_2X),
        $size_avatar_normal: Math.ceil(Dimens.SIZE_AVATAR_NORMAL * Dimens.SCALE_2X),
        $size_avatar_small: Math.ceil(Dimens.SIZE_AVATAR_SMALL * Dimens.SCALE_2X),
        // dimens
        $padding_layout: Math.ceil(Dimens.PADDING_LAYOUT * Dimens.SCALE_2X),
        $padding_content: Math.ceil(Dimens.PADDING_CONTENT * Dimens.SCALE_2X),
        $button_size_width: Math.ceil(Dimens.BUTTON_SIZE * Dimens.SCALE_2X),
        $width_label: Math.ceil(Dimens.WIDTH_LABEL * Dimens.SCALE_2X),
        $size_wifi: Math.ceil(Dimens.SIZE_WIFI * Dimens.SCALE_2X),
        $size_action_call_bottom: Math.ceil(Dimens.SIZE_ACTION_CALL_BOTTOM * Dimens.SCALE_2X),
        $size_action_call_bottom_menu: Math.ceil(Dimens.SIZE_ACTION_CALL_MENU * Dimens.SCALE_2X),
        $button_size_action: Math.ceil(Dimens.BUTTON_SIZE_ACTION * Dimens.SCALE_2X),
        $height_input_text: Math.ceil(Dimens.HEIGHT_INPUT_TEXT * Dimens.SCALE_2X)
    },
    '@media (min-width: 500)': {
        // media query on sheet level
        // font
        $font_header: Math.ceil(Dimens.FONT_HEADER * Dimens.SCALE_3X),
        $font_title: Math.ceil(Dimens.FONT_TITLE * Dimens.SCALE_3X),
        $font_content: Math.ceil(Dimens.FONT_CONTENT * Dimens.SCALE_3X),
        $font_description: Math.ceil(Dimens.FONT_DESCRIPTION * Dimens.SCALE_3X),
        $font_menu: Math.ceil(Dimens.FONT_MENU * Dimens.SCALE_3X),
        $font_badget: Math.ceil(Dimens.FONT_BADGET * Dimens.SCALE_3X),
        // radius
        $radius: Math.ceil(Dimens.RADIUS * Dimens.SCALE_3X),
        $radius_action: Math.ceil(Dimens.RADIUS_BG * Dimens.SCALE_3X),
        $radius_background: Math.ceil(Dimens.RADIUS_BG * Dimens.SCALE_3X),
        // size icon
        $size_icon_width: Math.ceil(Dimens.SIZE_ICON_WIDTH * Dimens.SCALE_3X),
        $size_icon_height: Math.ceil(Dimens.SIZE_ICON_HEIGHT * Dimens.SCALE_3X),
        $size_icon_tab_width: Math.ceil(Dimens.SIZE_TAB_WIDTH * Dimens.SCALE_3X),
        $size_icon_tab_height: Math.ceil(Dimens.SIZE_TAB_HEIGHT * Dimens.SCALE_3X),
        $size_icon_menu: Math.ceil(Dimens.SIZE_ICON_MENU * Dimens.SCALE_3X),
        $size_icon_action: Math.ceil(Dimens.SIZE_ICON_ACTION * Dimens.SCALE_3X),
        // avatar
        $size_avatar_large: Math.ceil(Dimens.SIZE_AVATAR_LARGE * Dimens.SCALE_3X),
        $size_avatar_normal: Math.ceil(Dimens.SIZE_AVATAR_NORMAL * Dimens.SCALE_3X),
        $size_avatar_small: Math.ceil(Dimens.SIZE_AVATAR_SMALL * Dimens.SCALE_3X),
        // dimens
        $padding_layout: Math.ceil(Dimens.PADDING_LAYOUT * Dimens.SCALE_3X),
        $padding_content: Math.ceil(Dimens.PADDING_CONTENT * Dimens.SCALE_3X),
        $button_size_width: Math.ceil(Dimens.BUTTON_SIZE * Dimens.SCALE_3X),
        $width_label: Math.ceil(Dimens.WIDTH_LABEL * Dimens.SCALE_3X),
        $size_wifi: Math.ceil(Dimens.SIZE_WIFI * Dimens.SCALE_3X),
        $size_action_call_bottom: Math.ceil(Dimens.SIZE_ACTION_CALL_BOTTOM * Dimens.SCALE_3X),
        $size_action_call_bottom_menu: Math.ceil(Dimens.SIZE_ACTION_CALL_MENU * Dimens.SCALE_3X),
        $button_size_action: Math.ceil(Dimens.BUTTON_SIZE_ACTION * Dimens.SCALE_3X),
        $height_input_text: Math.ceil(Dimens.HEIGHT_INPUT_TEXT * Dimens.SCALE_3X)
    }
});

export default styles;
