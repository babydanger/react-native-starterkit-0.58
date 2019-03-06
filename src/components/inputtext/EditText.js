import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Input } from 'native-base';

// global
import {
    AppStyles, Dimens, Utils, Colors
} from '../../configs/appConfig';

// component
import Line from '../../components/lines/Line';

class EditText extends Component {
    constructor(props) {
        super(props);
        this.state = { iconRight: this.props.iconRightNormal };
    }

    onClickRight = () => {
        this.setState({
            iconRight: this.state.iconRight === this.props.iconRightNormal ?
                this.props.iconRightActive : this.props.iconRightNormal
        });

        if (this.props.onClickIconRight) { this.props.onClickIconRight(); }
    };

    getRefInput = () => {
        return this.refInput;
    };

    render() {
        return (
            <View style={[styles.container, AppStyles.paddingContent]}>
                {/* customize style label */}
                {
                    !Utils.isNullOrUndefined(this.props.label) && this.props.styleLabel && <Text style={this.props.styleLabel}>{this.props.label}</Text>
                }
                {/* style label default*/}
                {
                    !Utils.isNullOrUndefined(this.props.label) && !this.props.styleLabel && <Text style={[AppStyles.fontDescription, AppStyles.fontColorLabel]}>{this.props.label}</Text>
                }
                {/* content */}
                <View style={styles.content}>
                    {/* icon left */}
                    {
                        this.props.iconLeft !== null && <Image style={AppStyles.icon} source={this.props.iconLeft} resizeMode='contain' />
                    }
                    {/* input */}
                    <Input {...this.props} ref={ref => this.refInput = ref} />
                    {/* text right */}
                    {
                        !Utils.isNullOrUndefined(this.props.textRight) && <Text style={AppStyles.fontContent}>{this.props.textRight}</Text>
                    }
                    {/* icon right */}
                    {
                        this.state.iconRight !== null && <TouchableOpacity style={AppStyles.icon} onPress={this.onClickRight} activeOpacity={Dimens.OPACITY}>
                            <Image style={[AppStyles.icon]} source={this.state.iconRight} resizeMode={this.props.isIconRightCenter ? 'center' : 'contain'} />
                        </TouchableOpacity>
                    }
                </View>
                {/* line */}
                <Line backgroundColor={Utils.isNullOrUndefined(this.props.error) ? Colors.COLOR_LIGHT_GRAY : Colors.COLOR_RED} />
                {
                    !Utils.isNullOrUndefined(this.props.error) && <Text style={[AppStyles.fontDescription, AppStyles.fontColorRed, styles.error]}>
                        {this.props.error}
                    </Text>
                }
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        width: '100%',
        textAlign: 'right'
    }
});

EditText.propTypes = {
    iconLeft: PropTypes.any,
    iconRightNormal: PropTypes.any,
    iconRightActive: PropTypes.any,
    onClickIconRight: PropTypes.func,
    error: PropTypes.string,
    label: PropTypes.string,
    textRight: PropTypes.string,
    isIconRightCenter: PropTypes.bool,
    styleLabel: PropTypes.any
};

EditText.defaultProps = {
    iconLeft: null,
    iconRightNormal: null,
    iconRightActive: null,
    onClickIconRight: () => { },
    error: '',
    label: '',
    textRight: '',
    isIconRightCenter: false,
    styleLabel: null
};

export default EditText;
