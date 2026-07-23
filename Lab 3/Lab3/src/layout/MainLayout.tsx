import { useState } from "react";
import { View } from "react-native";
import BottomNav from "./BottomNav";

interface MainLayoutProps {
    children: React.ReactNode;
    initialTab?: string;
    onTabChange?: (key: string) => void;
}

export default function MainLayout({ children, initialTab = 'products', onTabChange }: MainLayoutProps) {
    const [active, setActive] = useState(initialTab);
    const handleChange = (key: string) => {
        setActive(key);
        onTabChange?.(key);
    }

    return (
        <View className="flex-1 bg-gray-50 mb-4">
            <View className="flex-1">{children}</View>
            <BottomNav active={active} onChange={handleChange} />
        </View>
    );
}