import React, { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import Product from '../components/Product';
import ProductType from '../types/ProductType';
import { Card } from 'react-native-paper';

const API_BASE_URL = 'https://dummyjson.com/products';

export default function SearchProduct() {
    const [data, setData] = useState<ProductType[]>([]);
    const [value, setValue] = useState('');

    const searchProduct = async () => {
        const endpoint = value.trim()
            ? `${API_BASE_URL}/search?q=${value}`
            : API_BASE_URL;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setData(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <View className="flex-1 bg-white px-4 pt-4">
            <Card className='px-4 pt-2 mt-2'>
                <Text className="text-xl font-bold text-gray-800 mt-2 mb-4">
                    Search Products
                </Text>

                <TextInput
                    className="border border-gray-300 rounded-lg px-3 py-2 mb-3 text-gray-700 bg-white"
                    placeholder="Enter keyword..."
                    placeholderTextColor="#9ca3af"
                    value={value}
                    onChangeText={setValue}
                />

                <Pressable
                    onPress={searchProduct}
                    className="bg-blue-500 rounded-lg py-3 items-center mb-4 active:bg-blue-600"
                >
                    <Text className="text-white font-bold">SEARCH</Text>
                </Pressable>

                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Product
                            key={item.id}
                            props={item}
                            handleDelete={() => handleDelete(item.id)}
                        />
                    )}
                />
            </Card> 
        </View>
    );
}