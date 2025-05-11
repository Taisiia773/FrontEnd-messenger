import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { RegisterStepOne } from "../../modules/auth/ui";
import { COLORS } from "../../shared/constants";
import { IMAGES } from "../../shared/ui/images";


export default function Register() {
	return (
			<SafeAreaView style={{ flex: 1}}>
				<StatusBar style="auto" />
				<RegisterStepOne />
				<View
					style={{
						flex: 0.5,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<Text style={{ color: COLORS.grey }}>
						Already have an account?
					</Text>
					<Link href={"/login"} style={{ color: COLORS.black }}>
						Login now
					</Link>
				</View>
			</SafeAreaView>
	);
}
