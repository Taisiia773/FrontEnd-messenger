import { View, Text } from "react-native";
import { IMAGES } from "../../../../shared/ui/images";
import { styles } from "./welcome-block.styles";

export function WelcomeBlock() {
	return (
		<View style={styles.container}>
			<IMAGES.LogoImage style={styles.logo} />
		</View>
	);
}
