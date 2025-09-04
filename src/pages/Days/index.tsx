import { SafeAreaProvider } from "react-native-safe-area-context";
import DayScreen from "../../features/DayScreens/Components/DayScreen";

export default function Days(props: any) {
    return (
        <SafeAreaProvider>
            <DayScreen {...props} />
        </SafeAreaProvider>
    );
}
