import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const data = require('../../../Constants/products.json');
import ProductList from './ProductList';

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
            <Text>Product Containers</Text>
            <View style={{ marginTop: 100 }}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                    numColumns={2}
                    keyExtractor={item => item.name}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}



export default ProductContainer;