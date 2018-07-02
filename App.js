import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/Login';
import Native from './src/components/Native';
import TestWebview from './src/components/WebView';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader requires main', 'Class RCTCxxModule']);
// Warnings Issues at this moment
// https://github.com/facebook/react-native/issues/18868
// https://github.com/facebook/react-native/issues/17504
// https://github.com/facebook/react-native/issues/18201

export default createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },
        Native: {
            screen: Native,
        },
        TestWebview: {
            screen: TestWebview,
        }
    },
    {
        initialRouteName: 'Login',
    }
);
