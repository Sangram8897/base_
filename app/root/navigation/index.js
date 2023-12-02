import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, Login, Account, CreateAccount } from 'containers';
import BottomTab from './bottom_tab';
import { navigationRef } from './root_navigation';


const Stack = createNativeStackNavigator();

const AppNavigationStack = () => {
    const user_data = false
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user_data ?
                    <>
                        <Stack.Screen name="Login" component={Login} />
                    </> :
                    <>
                        <Stack.Screen name="BottomTab" component={BottomTab} />
                        <Stack.Screen name="CreateAccount" component={CreateAccount} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationStack;