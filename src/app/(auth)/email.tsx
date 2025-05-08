import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";
import { EmailForm } from "../../modules/auth/ui/email-form";

export default function Email() {
    return (

            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <EmailForm />
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
    );
}
