import {createStackNavigator} from 'react-navigation';

import Tab5Container from '../../../containers/Tab5Container';


export const Tab5StackNavigator = createStackNavigator(
    {
        Tab5Container: {
            screen: Tab5Container
        },

    },
    {
        headerMode: 'none',
        mode: 'default'
    }
);