import React, {PureComponent} from 'react';
import {View, Image, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Text, TextInput} from 'react-native';
import sha1 from 'js-sha1';
import data from '../mock/data.json';
import testID from './TestID';

class Login extends PureComponent {
    state = {
        username: null,
        password: null,
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
            this.props.navigation.navigate(user.screen, {
                username,
                balance: user.balance,
            });
        } else {
            this.setState({errors: true});
        }
    };

    render() {
        const {username, password, errors} = this.state;

        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/addison-global.png')}/>
                </View>
                <View style={styles.form}>
                    <TextInput style={[styles.input, errors ? styles.inputError : null]}
                               value={username}
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
                               onChangeText={(text) => this.setState({password: text})}
                               ref={input => this.passwordInput = input}
                               returnKeyType="go"
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
            </KeyboardAvoidingView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        height: 180,
    },
    form: {
        padding: 20,
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
