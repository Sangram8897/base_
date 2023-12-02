import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, Login, Account } from 'containers';
import BottomTab from './bottom_tab';


const Stack = createNativeStackNavigator();

const AppNavigationStack = () => {
    const user_data = false
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user_data ?
                    <>
                        <Stack.Screen name="Login" component={Login} />
                    </> :
                    <>
                        <Stack.Screen name="BottomTab" component={BottomTab} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationStack;