import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import testID from './TestID';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
        padding: 25,
        backgroundColor: '#000',
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        width: 500,
        height: 500
    },
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        height: 450,
        width: 450,
    },
    name: {
        color: '#fff',
        fontSize: 35,
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 20,
    },
    white: {
        color: '#fff',
        fontSize: 20,
        marginRight: 20,
    },
    balance: {
        borderRadius: 5,
        backgroundColor: '#fff',
        width: 150,
    },
    balanceText: {
        alignSelf: 'center',
        fontSize: 25,
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

class Native extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sw: false,
        }
    }

    switchHandler = () => {
        this.setState(previousState => {
            return { sw: !previousState.sw };
        });
    }

    backHome = () => {
        this.props.history.push({
            pathname: '/',
        });
    }

    render() {
        const { sw } = this.state;
        const username = this.props.location.state.usernameme;
        const balance = this.props.location.state.balance;
        const imageUri = require('../images/addison-global.png');

        return (
            <View {...testID.homeView} style={styles.container}>
                <TouchableOpacity {...testID.nativeBackHome} style={styles.buttonContainer} onPress={this.backHome}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={{ uri : imageUri }} />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.name}>Welcome {username}</Text>
                    <View style={styles.row}>
                        <Text style={styles.white}>Show Balance</Text>
                        <Switch
                            // testID
                            onValueChange={this.switchHandler}
                            value={sw}
                            tintColor='gray'
                            {...testID.switch}
                        />
                    </View>
                    <View style={[styles.balance, { opacity: sw ? 1 : 0 }]} {...testID.balanceView}>
                        <Text style={styles.balanceText} {...testID.balanceText}>{ balance }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Native;