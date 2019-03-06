import { createStackNavigator } from 'react-navigation';

import Tab4Container from '../../../containers/Tab4Container';


export const Tab4StackNavigator = createStackNavigator(
    {
        Tab4Container: {
            screen: Tab4Container
        },

    },
    {
        headerMode: 'none',
        mode: 'default'
    }
);