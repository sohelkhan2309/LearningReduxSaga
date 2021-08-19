import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    FlatList
} from 'react-native';
import { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

const Cart = (cart_data) => {

    useEffect(() => {

    }, []);

    console.log("adas : " + cart_data.length)

    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: '#ffffff', margin: 10, padding: 10 }}>
            <Text style={{ fontSize: 20, color: '#000000' }}>{item.API}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor="#347CD3" />
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cart_data}
                    marginBottom={20}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
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
        backgroundColor: '#000'
    },
    image: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function mapStateToProps(state) {
    console.log(state.cart_products)
    return {
        cart_data: state.cart_products
    };
};

export default connect(mapStateToProps)(Cart);