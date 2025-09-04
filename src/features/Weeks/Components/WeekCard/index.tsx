import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../app/Types/types";

interface WeekCardProps {
    day: string;
}

export default function WeekCard({ day }: WeekCardProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate("DayScreen", { day }); // ✅ ekran ismi DayScreen
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.dayTitle}>{day}</Text>
        </TouchableOpacity>
    );
}
