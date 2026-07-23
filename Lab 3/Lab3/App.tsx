import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import './global.css';

import BottomNav from './src/layout/BottomNav';
import ProductList from './src/pages/ProductList';
import AddPage from './src/pages/AddPage';
import SearchProduct from './src/pages/SearchProduct';
import ProductDetail from './src/pages/ProductDetail';

export type RootTabParamList = {
    Products: undefined;
    Add: undefined;
    Search: undefined;
    Detail: { productId: number } | undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList { }
    }
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{ headerShown: false }}
                    tabBar={({ state, navigation }) => (
                        <BottomNav
                            active={state.routes[state.index].name.toLowerCase()}
                            onChange={(key) => {
                                const routeName = (key.charAt(0).toUpperCase() + key.slice(1)) as keyof RootTabParamList;
                                navigation.navigate(routeName);
                            }}
                        />
                    )}
                >
                    <Tab.Screen name="Products" component={ProductList} />
                    <Tab.Screen name="Add" component={AddPage} />
                    <Tab.Screen name="Search" component={SearchProduct} />
                    <Tab.Screen name="Detail" component={ProductDetail} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}