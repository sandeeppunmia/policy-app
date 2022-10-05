import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Dashboard from '../screens/Dashboard';
import Clock from '../screens/Clock';
import Documents from '../screens/Documents';
import Calculator from '../screens/Calculator';
import AddPolicy from '../screens/AddPolicy';

export const AppTabNavigator = createBottomTabNavigator({
  Clock: {
    screen: Clock,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/clock_icon.jpg')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: 'Clock',
    },
  },
  AddPolicy: {
    screen: AddPolicy,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/add_icon.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: 'Add Policy',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/dashboard_icon.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: 'Dashboard',
    },
  },
  Calculator: {
    screen: Calculator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/calculator_icon.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: 'Calculator',
    },
  },
  Documents: {
    screen: Documents,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/documents_icon.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: 'Documents',
    },
  },
});
