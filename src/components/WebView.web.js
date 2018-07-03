import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-web-webview';

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        padding: 15
    },
    buttonContainer: {
        backgroundColor: '#0facf3',
        paddingVertical: 15,
        width: 80,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

class TestWebview extends Component {
    constructor(props) {
        super(props);
    }

    backHome = () => {
        this.props.history.push({
            pathname: '/',
        });
    }

    render() {
        const { username, balance } = this.props.location.state;
        const jsScript = `
            document.getElementById("username").innerHTML = '${username}';
            document.getElementById("balance").innerHTML = '${balance}';`;
        const source = {
            uri: './html/index.html',
            method: 'GET',
            header: {
                'Type-Content': 'text/html',
            },
        };


        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.backHome}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <WebView
                    source={source}
                    injectedJavaScript={jsScript}
                />
            </View>
        );
    }
}

export default TestWebview;