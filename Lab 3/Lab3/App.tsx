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

const routeNameToKey: Record<string, string> = {
    Products: 'products',
    Add: 'add',
    Search: 'search',
    Detail: 'detail',
};

const keyToRouteName: Record<string, keyof RootTabParamList> = {
    products: 'Products',
    add: 'Add',
    search: 'Search',
    detail: 'Detail',
};

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{ headerShown: false }}
                    tabBar={({ state, navigation }) => {
                        const currentRouteName = state.routes[state.index].name;
                        const activeKey = routeNameToKey[currentRouteName] || 'products';

                        return (
                            <BottomNav
                                active={activeKey}
                                onChange={(key) => {
                                    const targetRoute = keyToRouteName[key];
                                    if (targetRoute) {
                                        navigation.navigate(targetRoute as any);
                                    }
                                }}
                            />
                        );
                    }}
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