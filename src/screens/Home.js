import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { fetchProducts } from '../../actions/product_action';
import { addToCart } from '../../actions/cart_action';

const Home = ({ navigation: { navigate } }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const dataArray = useSelector((state) => state.products);
    const cartArray = useSelector((state) => state.cart_products);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={
            () =>
            dispatch(addToCart(item))
        }>
            <View style={{ backgroundColor: '#ffffff', margin: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#000000' }}>{item.API}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor="#000" />
            <View>
                <TouchableOpacity onPress={
                    () =>
                        navigate('Cart')
                }>
                    <View style={{ height: 50, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>
                            Cart : {dataArray.length}
                        </Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataArray}
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

export default Home;