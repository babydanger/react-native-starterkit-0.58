import { createStackNavigator } from 'react-navigation';

import Tab1Container from '../../../containers/Tab1Container';


export const Tab1StackNavigator = createStackNavigator(
    {
        Tab1Container: {
            screen: Tab1Container
        },

    },
    {
        headerMode: 'none',
        mode: 'default'
    }
);