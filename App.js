/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';

import MainTabNavigator from './navigation/MainTabNavigator';

export default MainTabNavigator;

{/*const bottomNav = createBottomTabNavigator(
  {
    Home: HomeView,
    Settings: SettingsView,
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#002554', //Blue
        inactiveTintColor: '#65686B', //Gray
      },
    }
);

const App = createAppContainer(bottomNav);

export default App;*/}

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/}
