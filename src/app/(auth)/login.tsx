import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";
import { IMAGES } from "../../shared/ui/images";

export default function Login() {
	return (
		<ImageBackground
			source={IMAGES.BackgroundImage}
			style={{ flex: 1 }}
			resizeMode="cover">

			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" />
				<WelcomeBlock />
				<LoginForm />
				<View
					style={{
						flex: 0.5,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}>
					<Text style={{ color: COLORS.grey }}>
						Already have an account?
					</Text>
					<Link href={"/register"} style={{ color: COLORS.black }}>
						Register now
					</Link>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
}
