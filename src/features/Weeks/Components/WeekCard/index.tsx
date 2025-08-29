import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles";
import { Text } from "react-native";

export default function WeekCard({day} : {day : string}) {

    return (
        <SafeAreaProvider style={styles.container}>
            <Text>{day}</Text>
        </SafeAreaProvider>
    )
}