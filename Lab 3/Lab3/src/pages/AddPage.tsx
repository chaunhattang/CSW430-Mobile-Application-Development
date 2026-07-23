import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, Text } from 'react-native';
import FormField from '../components/FormField';
import { Card } from 'react-native-paper';

const ADD_PRODUCT_API = 'https://dummyjson.com/products/add';

export default function AddPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = async () => {
        const payload = {
            title,
            description,
            price: Number(price),
            discountPercentage: Number(discountPercentage),
            rating: Number(rating),
            stock: Number(stock),
            brand,
            category,
            images: images
                .split(',')
                .map(url => url.trim())
                .filter(Boolean),
        };

        try {
            const response = await fetch(ADD_PRODUCT_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const data = await response.json();
            console.log('Added product:', data);
            Alert.alert('Add successful');
        } catch (error) {
            console.error('Error adding product:', error);
            Alert.alert('Add failed', 'Vui lòng thử lại');
        }
    };

    return (
        <ScrollView className="flex-1 bg-white px-4 pt-4">
            <Card className="px-5 py-2 mt-2">
                <Text className="text-xl font-bold text-blue-700 mt-2 mb-4 ">
                    Add a Product
                </Text>

                <FormField
                    form={{ label: 'Title', placeholder: 'Enter title', value: title }}
                    onChangeText={setTitle}
                />
                <FormField
                    form={{ label: 'Description', placeholder: 'Enter description', value: description }}
                    onChangeText={setDescription}
                />
                <FormField
                    form={{ label: 'Price', placeholder: 'Enter price', value: price, keyboardType: 'numeric' }}
                    onChangeText={setPrice}
                />
                <FormField
                    form={{ label: 'Discount Percentage', placeholder: 'Enter discount percentage', value: discountPercentage, keyboardType: 'numeric' }}
                    onChangeText={setDiscountPercentage}
                />
                <FormField
                    form={{ label: 'Rating', placeholder: 'Enter rating', value: rating, keyboardType: 'numeric' }}
                    onChangeText={setRating}
                />
                <FormField
                    form={{ label: 'Stock', placeholder: 'Enter stock', value: stock, keyboardType: 'numeric' }}
                    onChangeText={setStock}
                />
                <FormField
                    form={{ label: 'Brand', placeholder: 'Enter brand', value: brand }}
                    onChangeText={setBrand}
                />
                <FormField
                    form={{ label: 'Category', placeholder: 'Enter category', value: category }}
                    onChangeText={setCategory}
                />
                <FormField
                    form={{ label: 'Images', placeholder: 'Enter images URL(s)', value: images }}
                    onChangeText={setImages}
                />

                <Pressable
                    onPress={handleSubmit}
                    className="bg-blue-500 rounded-lg py-3 items-center mt-2 mb-4 active:bg-blue-600"
                >
                    <Text className="text-white font-bold">SUBMIT</Text>
                </Pressable>
            </Card>

        </ScrollView >
    );
}