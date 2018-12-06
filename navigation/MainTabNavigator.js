import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Import views
import HomeView from '../views/HomeView';
import SettingsView from '../views/SettingsView';
import DetailsView from '../views/DetailsView';
import BookDetailsView from '../views/BookDetails';

//Create stacks of tab views with details
const HomeStack = createStackNavigator({
  Home: HomeView,
  Details: DetailsView,
  BookDetails: BookDetailsView,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
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
));

//export default bottomNav;
