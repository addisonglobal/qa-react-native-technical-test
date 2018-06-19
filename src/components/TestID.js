import {Platform} from 'react-native';

const loginUsernameTestId = 'LoginUsernameTestId';
const loginTestId = 'LoginTestId';
const loginErrorTestId = 'LoginErrorTestId';
const switchTestId = 'SwitchTestId';
const balanceViewTestId = 'BalanceViewTestId';
const balanceTextTestId = 'BalanceTextTestId';
const homeViewTestId = 'HomeViewTestId';

const testID = Platform.OS === 'ios' ? {
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
    }
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
    }
};

export default testID;
