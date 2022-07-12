import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const data = require('../../../Constants/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, []);


    return (
        <View>
            <Text>Product Container</Text>
            <View style={{ marginTop: 100 }}>
                <FlatList
                    horizontal
                    data={products}
                    renderItem={({ item }) => <Text>{item.brand}</Text>}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}



export default ProductContainer;