import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../../../app/Types/types";

type DayScreenRouteProp = RouteProp<RootStackParamList, "DayScreen">;

interface Props {
    route: DayScreenRouteProp;
}

export default function DayScreen({ route }: Props) {
    const { day } = route.params; // ✅ artık TypeScript biliyor

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bugün: {day}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 24, fontWeight: "600" },
});
