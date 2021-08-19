import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';

const Splash = ({ navigation: { navigate } }) => {

    setTimeout(() => {
        navigate('Home', { names: ['Brent', 'Satya', 'Michaś'] })
    }, 2000);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor="#347CD3" />
            <View>
                <Text>
                    Redux Saga
                </Text>
            </View>
        </View>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#347CD3'
    },
    image: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Splash;