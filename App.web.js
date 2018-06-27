import React, { Component } from 'react';
import { View } from 'react-native';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './src/components/Login';
import Native from './src/components/Native';
import TestWebview from './src/components/WebView';

class App extends Component {
    render() {
        return(
            <Router>
                <View>
                    <Route exact path="/" component={Login} />
                    <Route path="/native" component={Native} />
                    <Route path="/testwebview" component={TestWebview} />
                </View>
            </Router>
        );
    }
}

export default App;
