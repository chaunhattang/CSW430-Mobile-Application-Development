import { Pressable, Text, View } from "react-native";

interface TabItem {
    key: string;
    label: string;
    icon: string;
    badge?: string;
}

const tabs: TabItem[] = [
    { key: 'products', label: 'Products', icon: '🛒' },
    { key: 'add', label: 'Add', icon: '💣' },
    { key: 'search', label: 'Search', icon: '❓' },
    { key: 'detail', label: 'Detail', icon: '🆕' },
];

interface BottomNavProps {
    active: string;
    onChange: (key: string) => void;
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
    return (
        <View className="flex-row bg-white border-t border-gray-200 py-2 px-2 items-center justify-around mb-4">
            {tabs.map((tab) => {
                const isActive = active === tab.key;
                return (
                    <Pressable
                        key={tab.key}
                        onPress={() => onChange(tab.key)}
                        className='flex-1 items-center justify-center   mx-1 '
                    >
                        <Text className={`text-xl px-5  py-2  rounded-2xl ${isActive ? 'bg-purple-100' : 'bg-transparent'}`}>
                            {tab.icon}
                        </Text>
                        <Text className='text-xs mt-1 text-gray-500'>
                            {tab.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}