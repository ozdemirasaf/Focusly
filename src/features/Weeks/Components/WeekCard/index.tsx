import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface WeekCard {
    day: string,
}

export default function WeekCard({ day }: WeekCard) {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.dayTitle}>{day}</Text>
        </TouchableOpacity>
    )
}