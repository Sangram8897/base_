import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'appearance/theme/colors';

import { Dashboard, Account } from 'containers';
import useTheme from 'hooks/useTheme';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const { themeColors, Layout, Common } = useTheme()

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
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY_G3,
        headerShown: false,
        tabBarStyle: { backgroundColor: themeColors.HEADER },
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