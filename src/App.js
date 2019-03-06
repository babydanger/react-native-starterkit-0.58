import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import Store from './configs/store';
import RootNavigator from './navigation/RootNavigator';
import { isIphoneX } from 'react-native-iphone-x-helper';
import AppStyles from './configs/styles';

type Props = {};
export default class App extends Component<Props> {
    render() {
        const UsingSafeAreaView = () => {
            if (isIphoneX()) {
                return <SafeAreaView style={AppStyles.root}>
                    <RootNavigator />
                </SafeAreaView>;
            } else {
                return <RootNavigator />;
            }
        };
        return (
            <Provider store={Store}>
                <UsingSafeAreaView />
            </Provider>
        );
    }
}