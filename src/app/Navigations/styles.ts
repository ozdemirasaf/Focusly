import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    tabBar: { 
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 20, // sağ ve soldan boşluk
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 35,
        height: 55,
        paddingBottom: Platform.OS === 'ios' ? 15 : 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
});
