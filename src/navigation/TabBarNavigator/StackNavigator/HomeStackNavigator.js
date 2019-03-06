import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../../../containers/HomeContainer';


export const HomeStackNavigator = createStackNavigator(
    {
        HomeContainer: {
            screen: HomeContainer
        },

    },
    {
        headerMode: 'none',
        mode: 'default'
    }
);