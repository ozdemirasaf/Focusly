import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import style from "./style";
import WeekCard from "../../features/Weeks/Components/WeekCard";
import days from "../../features/Weeks/Data/day";


export default function Weeks() {
    return (
        <SafeAreaProvider style={style.container}>
            <FlatList
                data={days}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false} 
                renderItem={({ item }) => (
                    <WeekCard day={item.name}/>
                )}
            />
        </SafeAreaProvider>
    )
}
