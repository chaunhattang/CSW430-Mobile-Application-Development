import React from 'react';
import { Text, TextInput, View } from 'react-native';
import FormFieldType from '../types/FormFieldType';

interface FieldProps {
    onChangeText: (text: string) => void;
    form: FormFieldType;
}

export default function FormField({ form, onChangeText }: FieldProps) {

    return (
        <View className="mb-4">
            <Text className="text-sm font-semibold text-gray-800 mb-1">
                {form.label}
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white"
                placeholder={form.placeholder}
                placeholderTextColor="#9ca3af"
                value={form.value}
                onChangeText={onChangeText}
                keyboardType={form.keyboardType}
            />
        </View>
    );
}