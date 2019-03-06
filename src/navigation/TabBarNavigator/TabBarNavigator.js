import React, { Component } from 'react';
import {  createBottomTabNavigator } from 'react-navigation';

import { Tab1StackNavigator } from './StackNavigator/Tab1StackNavigator';
import { Tab2StackNavigator } from './StackNavigator/Tab2StackNavigator';
import { HomeStackNavigator } from './StackNavigator/HomeStackNavigator';
import { Tab4StackNavigator } from './StackNavigator/Tab4StackNavigator';
import { Tab5StackNavigator } from './StackNavigator/Tab5StackNavigator';

import CustomTabBar from './CustomTabBar';

const TabBarNavigator = createBottomTabNavigator(
    {
        Tab1StackNavigator: {
            screen: Tab1StackNavigator
        },
        Tab2StackNavigator: {
            screen: Tab2StackNavigator
        },
        HomeStackNavigator: {
            screen: HomeStackNavigator
        },
        Tab4StackNavigator: {
            screen: Tab4StackNavigator
        },
        Tab5StackNavigator: {
            screen: Tab5StackNavigator
        }
    },
    {
        headerMode: 'none',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        initialRouteName: 'HomeStackNavigator',
        tabBarComponent: CustomTabBar,
        lazy: true
    }
);

export default TabBarNavigator;
