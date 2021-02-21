import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import InputOTP from '../screens/auth/InputOTPScreen';

// Styles

import { colors } from '../styles/base';

// screens
import ItemList from '../screens/items/ItemsScreen';
import HomeScreen from '../screens/home/homeScreen';
import CartScreen from '../screens/sales/CartScreen';
import CartItemEdit from '../screens/sales/CartItemEdit';
import ItemCreate from '../screens/items/ItemCreateScreen';
import ItemEditScreen from '../screens/items/ItemEditScreen';
import ReportsScreen from '../screens/reports/ReportsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import EmployeesScreen from '../screens/employees/EmployeeScreen';
import CustomersScreen from '../screens/customers/CustomersScreen';
import AuthenticationScreen from '../screens/auth/AuthenticationScreen';

const { Navigator, Screen } = createStackNavigator();

const navigationOptions = {
  headerTintColor: colors.primaryText,
  headerStyle: { backgroundColor: colors.primary },
  headerTitleStyle: { color: colors.primaryText },
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Welcome"
          component={WelcomeScreen}
          options={navigationOptions}
        />

        <Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{
            ...navigationOptions,
            headerTitle: 'DukApp',
            headerLeft: null,
          }}
        />

        <Screen
          name="InputOTP"
          component={InputOTP}
          options={{
            ...navigationOptions,
            headerTitle: 'DukApp',
            headerLeft: null,
          }}
        />

        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            ...navigationOptions,
            headerTitle: 'DukApp',
            headerLeft: null,
          }}
        />
        <Screen name="Items" component={ItemList} options={navigationOptions} />
        <Screen
          name="Item"
          component={ItemCreate}
          options={navigationOptions}
        />
        <Screen
          name="ItemEdit"
          component={ItemEditScreen}
          options={navigationOptions}
        />

        <Screen
          name="Cart"
          component={CartScreen}
          options={navigationOptions}
        />
        <Screen
          name="CartItemEdit"
          component={CartItemEdit}
          options={navigationOptions}
        />

        <Screen
          name="Customers"
          component={CustomersScreen}
          options={navigationOptions}
        />

        <Screen
          name="Reports"
          component={ReportsScreen}
          options={navigationOptions}
        />

        <Screen
          name="Employees"
          component={EmployeesScreen}
          options={navigationOptions}
        />
        <Screen
          name="Settings"
          component={SettingsScreen}
          options={navigationOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
}
