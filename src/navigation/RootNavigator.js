import React, { Component } from 'react';
import { createAppContainer , createStackNavigator } from 'react-navigation';
import { View, Text, Platform } from 'react-native';

import SplashContainer from '../containers/SplashContainer';
import TabBarNavigator from './TabBarNavigator/TabBarNavigator';

import { Consts, Storage, Dimens, Utils, Colors } from '../configs/appConfig';

const RootNavigator = createStackNavigator(
    {
        // SplashContainer: { screen: SplashContainer },
        TabBarNavigator: { screen: TabBarNavigator }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'TabBarNavigator'
    }
);
export default createAppContainer(RootNavigator);