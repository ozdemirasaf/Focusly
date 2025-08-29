import { Text } from "@react-navigation/elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>aajdasdasdas</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}