import { StyleSheet } from "react-native";
import colors from "../../../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        width: "100%",             // tam genişlik
        backgroundColor: colors.primary,
        padding: 25,
        borderRadius: 15,
    },

    dayTitle: {
        fontWeight: "600",
        fontSize: 17,
        color: colors.white,
    },
});
