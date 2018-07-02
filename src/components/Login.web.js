import React, {PureComponent} from 'react';
import {View, Image, StyleSheet, Platform, TouchableOpacity, Text, TextInput} from 'react-native';
import sha1 from 'js-sha1';
import { Redirect } from 'react-router-dom';
import data from '../mock/data.json';
import testID from './TestID';

class Login extends PureComponent {
    state = {
        username: '',
        password: '',
        errors: false,
    };

    onLogin = () => {
        const {users} = data;
        const {username, password} = this.state;
        const user = users[username];
        if (user && password && user.password === sha1(password)) {
            this.setState({errors: false});
            this.userInput.blur();
            this.passwordInput.blur();
            const screen = `/${user.screen.toLowerCase()}`;
            this.props.history.push({
                pathname: screen,
                state: {
                    username,
                    balance: user.balance,
                }
            });
        } else {
            this.setState({errors: true});
        }
    };

    render() {
        const {username, password, errors} = this.state;
        const imageUri = require('../images/addison-global.png');
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={{ uri: imageUri }}
                    />
                </View>
                <View style={styles.form}>
                    <TextInput style={[styles.input, errors ? styles.inputError : null]}
                               value={username}
                               type='text'
                               autoCapitalize="none"
                               onChangeText={(text) => this.setState({username: text})}
                               ref={input => this.userInput = input}
                               onSubmitEditing={() => this.passwordInput.focus()}
                               spellCheck={false}
                               autoCorrect={false}
                               keyboardType='email-address'
                               returnKeyType="next"
                               placeholder='Username'
                               underlineColorAndroid='transparent'
                               placeholderTextColor='rgba(224,224,224,0.7)'
                               {...testID.username}
                    />
                    <TextInput style={[styles.input, errors ? styles.inputError : null]}
                               value={password}
                               type='text'
                               onChangeText={(text) => this.setState({password: text})}
                               ref={input => this.passwordInput = input}
                               returnKeyType="go"
                               placeholder="Password"
                               placeholderTextColor='rgba(224,224,224,0.7)'
                               underlineColorAndroid='transparent'
                               secureTextEntry
                    />
                    {errors ?
                        <View style={styles.error}>
                            <Text style={styles.buttonText} {...testID.error}>Wrong username or password</Text>
                        </View>
                        : null
                    }
                    <TouchableOpacity {...testID.login} style={styles.buttonContainer} onPress={this.onLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: 500,
        height: 500
    },
    logo: {
        position: 'absolute',
        height: 450,
        width: 450,
    },
    form: {
        padding: 20,
        width: 450,
        flex: 1,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(224,224,224,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
    },
    inputError: {
        borderWidth: 1,
        borderColor: 'red',
    },
    buttonContainer: {
        backgroundColor: '#0facf3',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    error: {
        backgroundColor: 'red',
        paddingVertical: 7,
        marginBottom: 10,
    },
});

export default Login;
