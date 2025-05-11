import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 2.3,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
    },

    textContainer: {
        alignItems: "center",
		justifyContent: "center",
    },

    text: {
        fontWeight: 500,
		fontSize: 24,
    },

    form: {
        gap: 10,
        padding: 20,
    },

    buttonBlock: {
        alignSelf: "center",
        marginTop: 20,
    },
})