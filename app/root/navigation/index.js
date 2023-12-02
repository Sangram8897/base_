import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'containers/test/home_screen';
import DetailsScreen from 'containers/test/details_screen';


const Stack = createNativeStackNavigator();

const AppNavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationStack;