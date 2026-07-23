import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Product from '../components/Product';
import ProductType from '../types/ProductType';

const API_BASE_URL = 'https://dummyjson.com/products';

export default function ProductList() {
    const [data, setData] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setData(prevData => prevData.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <ScrollView>
            <Text className="text-3xl font-bold text-gray-800 px-4 pt-8 pb-2">
                Product list
            </Text>
            {data.map(item => (
                <Product
                    key={item.id}
                    props={item}
                    handleDelete={() => handleDelete(item.id)}
                />
            ))}
        </ScrollView>
    );
}