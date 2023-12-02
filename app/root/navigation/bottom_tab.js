import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'appearance/theme/colors';

import { Dashboard, Login, Account } from 'containers';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user-o';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'layers' : 'layers-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.BLUE_B1,
        tabBarInactiveTintColor: Colors.GRAY_G3,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
      // options={{ headerTitle: 'Dashboard' }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
      // options={{ tabBarLabel: 'Account' }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;