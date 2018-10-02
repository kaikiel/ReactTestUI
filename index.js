/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './src/reducers/userReducers';

const userStore = createStore(userReducer);


const AppContainer = () =>
    <Provider store={userStore}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
