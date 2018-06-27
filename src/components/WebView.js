import React, { Component } from 'react';
import { Platform, WebView } from 'react-native';
class TestWebview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const username = this.props.navigation.getParam('username', 'user');
        const balance = this.props.navigation.getParam('balance', '0');
        const ios = require('./html/index.html');
        const android = { uri: 'file:///android_asset/html/index.html' };
        const jsScript = `
            document.getElementById("username").innerHTML = "${username}";
            document.getElementById("balance").innerHTML = "${balance}";
        `;

        return (
            <WebView
                source={ Platform.OS === 'ios' ? ios : android }
                style={{ width: '100%', height: '100%', backgroundColor: '#000' }}
                javaScriptEnabled={true}
                injectedJavaScript={jsScript}
                startInLoadingState={true}
            />
        );
    }
}

export default TestWebview;