import { StyleSheet } from "react-native";
import colors from "../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 10,
    },

    content: {
        flex: 1,              // tüm ekranı doldur
        justifyContent: "center", // dikey ortala
        gap: 20,                  // kartlar arası boşluk
    },
});
