import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore } from 'redux';

import LoginScreen from '../components/Login';
import HomeScreen from '../components/Home';
import NewsScreen from '../components/News';
import ProfileScreen from '../components/Profile';

const HomeStack = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    News: NewsScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Login',
};

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
};

export default createBottomTabNavigator({
    HomeStack,
    ProfileStack,
});

