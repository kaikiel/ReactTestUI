/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from './src/actions';

class App extends Component{
  
  constructor(props){
    super(props);
  }

  render(){
    
    return <MainTabNavigator></MainTabNavigator>
  }

}

function mapStateToProps(state){
  return {
    count: state
  }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(App);