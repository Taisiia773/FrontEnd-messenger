import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
	button: {
		width: 110,
		height: 50,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.blue,
		borderWidth: 2,
		borderColor: COLORS.white,
	},
	disabled: {
		borderWidth: 2,
		borderColor: COLORS.white,
		opacity: 0.5,
	},
});
