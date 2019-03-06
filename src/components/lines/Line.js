import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Colors,
    FlatListUtils,
} from '../../configs/appConfig';

class Line extends Component {
    render() {
        return FlatListUtils.renderSeparatorItem(this.props.height, this.props.backgroundColor);
    }
}

Line.propTypes = {
    height: PropTypes.number,
    backgroundColor: PropTypes.string
};

Line.defaultProps = {
    height: 1,
    backgroundColor: Colors.COLOR_LIGHT_GRAY
};

export default Line;
