/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../src/actions';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


class LoginScreen extends Component {

    fetchTest(){
        let formdata = new FormData();
        formdata.append('password', 'hn13441673')
        formdata.append('login', 'ah13441673@gmail.com')
        formdata.append('db', 'db')

        //console.warn(formdata._parts);


        fetch('http://064ce197.ngrok.io/api/authenticate', {
            method: 'post',
            headers: {
                Accept:'application/json',
                'Content-Type': 'multipart/form-data' },
            body: formdata,
        })
        .then((response) => {
            console.log(response);
            console.warn(response);
        })
        .catch((error) => {
            console.warn(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Login!</Text>
                <Text style={styles.welcome}>{this.props.count}</Text>
                <Button onPress={this.props.loginUser} title="Log in"></Button>
                <Button onPress={this.props.logoutUser} title="Log out"></Button>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});


function mapStateToProps(state) {
    return {
        count: state
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(LoginScreen);