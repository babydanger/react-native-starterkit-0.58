import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    AppStyles,
    Consts,
    Storage,
    Dimens,
    Utils,
    Colors,
    HeaderUtils,
    Images,
    FlatListUtils,
    ActionTypes,
    QS
} from '../../configs/appConfig';

class Column extends Component {
    render() {
        return (
            <View
                style={[
                    styles.line,
                    { width: this.props.width, height: this.props.height, backgroundColor: this.props.backgroundColor }
                ]}
            />
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    line: {}
});

Column.propTypes = {
    width: PropTypes.number,
    height: PropTypes.any,
    backgroundColor: PropTypes.string
};

Column.defaultProps = {
    width: 1,
    height: '100%',
    backgroundColor: Colors.COLOR_LIGHT_GRAY
};

export default Column;
