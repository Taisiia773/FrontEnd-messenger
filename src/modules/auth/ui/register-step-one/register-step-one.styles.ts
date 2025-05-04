import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 2.3,
        backgroundColor: COLORS.violet,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: COLORS.white,
        margin: 20,
        justifyContent: "center",
    },

    textContainer: {
        alignItems: "center",
		justifyContent: "center",
    },

    text: {
        fontWeight: 500,
		fontSize: 30,
    },

    form: {
        gap: 10,
        padding: 20,
    },

    buttonBlock: {
        alignSelf: "center",
    },
})