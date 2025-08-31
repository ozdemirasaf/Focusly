import { StyleSheet } from "react-native";
import colors from "../../../../app/Theme/colors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.primary,
        padding: 25,
        marginBottom: 30,
        borderRadius: 15
    },

    dayTitle : {
        fontWeight : '600',
        fontSize : 17,
        color : colors.white
        
    }

})