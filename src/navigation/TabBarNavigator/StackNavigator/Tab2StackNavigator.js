import { createStackNavigator } from 'react-navigation';

import Tab2Container from '../../../containers/Tab2Container';


export const Tab2StackNavigator = createStackNavigator(
    {
        Tab1Container: {
            screen: Tab2Container
        },

    },
    {
        headerMode: 'none',
        mode: 'default'
    }
);