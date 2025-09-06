import { StyleSheet } from "react-native";
import colors from "../../../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },

    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 20,
    },

    dayTitle: {
        fontSize: 18,
        fontWeight: "600"
    },

    // Modal Style

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 10,
    },

    modalHeaderButton: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },

    modalButton: {
        backgroundColor: "#007AFF",
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    modalButtonText: {
        color: "#fff",
        fontWeight: "600",
    },

})