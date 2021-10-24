import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from "@react-navigation/stack"

// pages..
import JobListScreen from './pages/JobList';
import FavoritesScreen from './pages/Favorites';
import JobDetailScreen from './pages/JobDetail';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

import FavoritesProvider from './context/Provider'

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="JobList" component={JobListScreen}  options={{
            title: 'Jobs',
            headerTintColor: '#EF5350',
            headerTitleAlign: 'center',
          }}/>
          <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
            title: 'Favorites',
            headerTintColor: '#EF5350',
            headerTitleAlign: 'center',
            headerLeftLabelVisible: false
          }}/>
      </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="JobList">
          <RootStack.Screen
            name="Main"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="JobDetail" component={JobDetailScreen} options={{
              title: 'Job Detail',
              headerTintColor: '#EF5350',
              headerTitleAlign: 'center',
              headerLeftLabelVisible: false
            }}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default Router;
