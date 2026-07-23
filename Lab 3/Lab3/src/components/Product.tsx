import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ProductType from '../types/ProductType';

interface ProductProps {
    props: ProductType;
    handleDelete: () => void;
}

export default function Product({ props, handleDelete }: ProductProps) {
    const navigation = useNavigation<any>();

    return (
        <View className="bg-white rounded-xl shadow-sm mx-3 mb-4 p-3">
            <Card>
                <View className="flex-row p-3">
                    <Image
                        source={{ uri: props.images[0] }}
                        className="w-24 h-24 rounded-lg bg-gray-100"
                        resizeMode="cover"
                    />

                    <View className="flex-1 ml-3">
                        <Text className="text-base font-bold text-gray-900">
                            Title: {props.title}
                        </Text>
                        <Text className="text-sm text-gray-500 mt-1">
                            Description: {props.description}
                        </Text>
                        <Text className="text-sm text-gray-800 mt-1">
                            Price: {props.price}
                        </Text>
                        <Text className="text-sm font-semibold text-green-600 mt-1">
                            Discount: {props.discountPercentage} off
                        </Text>
                        <Text className="text-sm text-gray-800 mt-1">
                            Rating: {props.rating}
                        </Text>
                        <Text className="text-sm text-gray-800 mt-1">
                            Stock: {props.stock}
                        </Text>
                        <Text className="text-sm text-gray-800 mt-1">
                            Brand: {props.brand}
                        </Text>
                        <Text className="text-sm text-gray-800 mt-1">
                            Category: {props.category}
                        </Text>

                        <View className="flex-row mt-3">
                            <Pressable
                                onPress={() => navigation.navigate('Detail', { productId: props.id })}
                                className="flex-1 bg-blue-500 rounded-md py-2 mr-2 items-center active:bg-blue-600"
                            >
                                <Text className="text-white font-semibold text-xs">DETAIL</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => navigation.navigate('Add')}
                                className="flex-1 bg-blue-500 rounded-md py-2 mr-2 items-center active:bg-blue-600"
                            >
                                <Text className="text-white font-semibold text-xs">ADD</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleDelete}
                                className="flex-1 bg-blue-500 rounded-md py-2 items-center active:bg-blue-600"
                            >
                                <Text className="text-white font-semibold text-xs">DELETE</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    );
}