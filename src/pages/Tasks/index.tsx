import { Text } from "@react-navigation/elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor : '#F3F2EC' }}>
                <Text>aajdasdasdas</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}