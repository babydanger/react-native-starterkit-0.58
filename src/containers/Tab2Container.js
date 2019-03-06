import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';


// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';

class Tab2Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExtContainer ref={ref => (this.container = ref)}>
                <Text>Tab 2</Text>
            </ExtContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: ' 100%',
        height: '100%',
    },
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(Tab2Container);
