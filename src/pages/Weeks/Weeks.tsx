import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import style from "./style";
import WeekCard from "../../features/Weeks/Components/WeekCard";
import days from "../../features/Weeks/Data/day";

const GAP = 23;

const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <WeekCard day={item.name} />
);


export default function Weeks() {
    return (
        <SafeAreaProvider style={style.container}>
            <FlatList
                data={days}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                renderItem={renderItem}
                contentContainerStyle={{
                    gap: GAP,
                    flexGrow: 1,
                    paddingVertical: GAP / 1,
                }}
            />
        </SafeAreaProvider>
    );
}
