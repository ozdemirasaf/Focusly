import { StyleSheet } from "react-native";
import colors from "../../../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 15,
    },

    dayTitle: {
        fontWeight: "600",
        fontSize: 17,
        color: colors.white,
    },
});
