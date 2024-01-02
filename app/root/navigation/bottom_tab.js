import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'appearance/theme/colors';

import { Dashboard, Account, Revenue, Leads, Add, More } from 'containers';
import useTheme from 'hooks/useTheme';
import { Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (<TouchableOpacity
  style={{
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={onPress}
>
  <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
    <Ionicons name={'add'} size={30} color={'white'} />
  </View>
  <Text style={{ fontSize: 10, marginTop: 4 }}>Add</Text>
</TouchableOpacity>
)

function BottomTab() {
  const { themeColors, Layout, Common } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        //  tabBarShowLabel: false,
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user-o';
          }

          else if (route.name === 'Leads') {
            iconName = focused ? 'users' : 'users';
          }
          else if (route.name === 'Revenue') {
            iconName = focused ? 'sellsy' : 'sellsy';
          }
          else if (route.name === 'More') {
            iconName = focused ? 'bars' : 'bars';
          }

          else if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY_G3,
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FFF' },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
      // options={{ headerTitle: 'Dashboard' }}
      />
      <Tab.Screen
        name="Leads"
        component={Leads}
      // options={{ tabBarLabel: 'Account' }}
      />
      <Tab.Screen
        name="Add"
        component={Add}

        options={{
          //  tabBarIcon: ({ focused }) => <Ionicons name={'layers'} size={30} color={'gray'} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Revenue"
        component={Revenue}

      />
      <Tab.Screen
        name="More"
        component={More}
      // options={{ headerTitle: 'Dashboard' }}
      />

    </Tab.Navigator>
  );
}

export default BottomTab;