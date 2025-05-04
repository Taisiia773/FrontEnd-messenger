import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";
import { IMAGES } from "../../shared/ui/images";
import { ProfileBlock } from "../../modules/auth/ui/profile-block";

export default function Profile() {
    return (
        <ImageBackground
            source={IMAGES.BackgroundImage}
            style={{ flex: 1 }}
            resizeMode="cover">

            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <ProfileBlock />
                {/* <LoginForm />
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
                    <Link href={"/register/step-one"} style={{ color: COLORS.black }}>
                        Register now
                    </Link>
                </View> */}
            </SafeAreaView>
        </ImageBackground>
    );
}
