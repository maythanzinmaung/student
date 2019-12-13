import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './HomeScreen.js';
import ResultScreen from './SearchResultScreen.js';
import DetailScreen from './DetailScreen.js'
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={20} />
        ),
      },
    },

    Result : {
      screen: ResultScreen,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={20} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#450817',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: '#e15258',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        elevation: 5,
      },
    },
  },
);


const stackNav= createStackNavigator({
  Tab: {
    screen: TabNavigator
  },
  Detail: {
    screen: DetailScreen
  },
 
  
},
{
  initialRouteName: "Tab",
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},

)
const AppContainer = createAppContainer(stackNav);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});