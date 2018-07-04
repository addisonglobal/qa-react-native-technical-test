import {Platform} from 'react-native';

const loginUsernameTestId = 'LoginUsernameTestId';
const loginTestId = 'LoginTestId';
const loginErrorTestId = 'LoginErrorTestId';
const switchTestId = 'SwitchTestId';
const balanceViewTestId = 'BalanceViewTestId';
const balanceTextTestId = 'BalanceTextTestId';
const homeViewTestId = 'HomeViewTestId';
const nativeBackHomeTestId = 'NativeBackHome';

const testID = Platform.OS === 'ios' || Platform.OS === 'web' ? {
    username: {
        testID: loginUsernameTestId,
    },
    login: {
        testID: loginTestId,
    },
    error: {
        testID: loginErrorTestId,
    },
    switch: {
        testID: switchTestId,
    },
    balanceView: {
        testID: balanceViewTestId,
    },
    balanceText: {
        testID: balanceTextTestId,
    },
    homeView: {
        testID: homeViewTestId,
    },
    nativeBackHome: {
        testID: nativeBackHomeTestId,
    },
} : {
    username: {
        accessibilityLabel: loginUsernameTestId,
    },
    login: {
        accessibilityLabel: loginTestId,
    },
    error: {
        accessibilityLabel: loginErrorTestId,
    },
    switch: {
        accessibilityLabel: switchTestId,
    },
    balanceView: {
        accessibilityLabel: balanceViewTestId,
    },
    balanceText: {
        accessibilityLabel: balanceTextTestId,
    },
    homeView: {
        accessibilityLabel: homeViewTestId,
    },
    nativeBackHome: {
        accessibilityLabel: nativeBackHomeTestId,
    },
};

export default testID;
