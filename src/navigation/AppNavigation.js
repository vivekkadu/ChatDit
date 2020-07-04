import React, { Component } from "react";
import { Platform, Image } from "react-native";
import HomeIcon from '../assets/Home.png'
import ProfileIcon from '../assets/User.png'
import NotificationIcon from '../assets/Bell.png'
import SplashScreen from '../screen/SplashScreen'
import menuIcon from '../assets/menuIcon.png'
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import MenuTab from "../screen/Tabs/MenuTab";
import LoginScreen from "../screen/Auth/LoginScreen";
import SignupScreen from "../screen/Auth/SignupScreen";
import HomeScreen from '../screen/Tabs/HomeScreen'
import ProfileScreen from '../screen/Tabs/ProfileScreen'
import NotificationScreen from '../screen/Tabs/NotificationScreen'
import menu_deactive from '../assets/menu_deactive.png'

const HomeStack = createStackNavigator(
  {

    Home: {
      screen: MenuTab,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Home"
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  }
);


const TabStackNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,

      navigationOptions: () => ({
        gesturesEnabled: false,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const image = focused ? HomeIcon : HomeIcon;
          return (
            <Image
              resizeMode="contain"
              style={styles.bottomIconStyle}
              source={image}
            />
          );
        }
      })
    },
    MyProfile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        gesturesEnabled: false,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const image = focused ? ProfileIcon : ProfileIcon;
          return (
            <Image
              resizeMode="contain"
              style={styles.bottomIconStyle}
              source={image}
            />
          );
        }
      })
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const image = focused ? NotificationIcon : NotificationIcon;
          return (
            <Image
              resizeMode="contain"
              style={styles.bottomIconStyle}
              source={image}
            />
          );
        }
      })
    },
    Menu: {
      screen: HomeStack,
      navigationOptions: () => ({
        gesturesEnabled: false,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const image = focused ? menuIcon : menu_deactive;
          return (
            <Image
              resizeMode="contain"
              style={[styles.bottomIconStyle, { width: 100, height: 35 }]}
              source={image}
            />
          );
        }
      })
    },

  },
  {
    tabBarOptions: {
      tabStyle: {
        fontSize: 10
      },
      showLabel: false,
      activeBackgroundColor: "#fff"
    }
  }
);

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppNavigation = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    Login: LoginStack,
    Tabs: TabStackNavigator
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const styles = {
  bottomIconStyle: {
    height: 25,
    width: 25
  }
};

export default createAppContainer(AppNavigation);
