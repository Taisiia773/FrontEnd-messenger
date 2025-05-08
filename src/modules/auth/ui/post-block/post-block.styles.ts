import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";


export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        marginVertical: 8,
    },
    tags: {
        color: COLORS.plum,
        fontSize: 13,
        marginBottom: 12,
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 8,
    },
    image: {
        width: "48%",
        height: 150,
        borderRadius: 12,
        marginBottom: 8,
    },
    footer: {
        flexDirection: "row",
        marginTop: 12,
        gap: 24,
    },
    footerText: {
        fontSize: 13,
        color: "#888"
    },
    icons: {
        flexDirection: "row", 
        alignItems: "center",
        gap: 8,
    },
});
