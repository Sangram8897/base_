import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, CreateAccount,Revenue,Leads,Add } from 'containers';

import { navigationRef } from './root_navigation';
import { RootStackParamList } from 'types/navigation';

import BottomTab from './bottom_tab';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigationStack = () => {
    //const user_data = useSelector((state: RootState) => state.auth.user);
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