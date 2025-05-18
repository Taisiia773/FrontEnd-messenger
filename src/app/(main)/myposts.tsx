import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { COLORS } from "../../shared/constants";
import { IMAGES } from "../../shared/ui/images";
import { HEADER } from "../../shared/ui/header";
import { FOOTER } from "../../shared/ui/footer";
import { PostBlock } from "../../modules/auth/ui/post-block";

export default function MyPosts() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="auto" />
            <HEADER/>
            <View style={{ flex: 1, backgroundColor: "#FAF8FF"}}>
                <Text>my posts</Text>
                <PostBlock/>
                
            </View>
            <FOOTER/>
        </SafeAreaView>
    );
}
