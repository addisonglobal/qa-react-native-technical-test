import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('QAReactNativeTechnicalTest', () => App);

AppRegistry.runApplication('QAReactNativeTechnicalTest', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
});
