import { StyleSheet } from "react-native";
import colors from "../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 10,
    },

    content: {
        flex: 1,
        marginTop: 23,
        gap: 20
    },
});
