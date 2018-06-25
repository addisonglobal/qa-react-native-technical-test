import React, { Component } from 'react';
import { Image, StyleSheet, Switch, Text, View } from 'react-native';
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
    },
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 180,
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
    }
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

    render() {
        const { sw } = this.state;
        const username = this.props.navigation.getParam('username', 'user');
        const balance = this.props.navigation.getParam('balance', '0');

        return (
            <View {...testID.homeView} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/addison-global.png')} />
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