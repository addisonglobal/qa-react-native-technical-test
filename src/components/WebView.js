import React, { Component } from 'react';
import { WebView } from 'react-native';
class TestWebview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const username = this.props.navigation.getParam('username', 'user');
        const balance = this.props.navigation.getParam('balance', '0');
        const html = require('./html/index.html');
        let jsScript = `
            document.getElementById("username").innerHTML = "${username}";
            document.getElementById("balance").innerHTML = "${balance}";
        `;

        return (
            <WebView
                source={html}
                style={{ width: '100%', height: '100%', backgroundColor: '#000' }}
                javaScriptEnabled={true}
                injectedJavaScript={jsScript}
            />
        );
    }
}

export default TestWebview;