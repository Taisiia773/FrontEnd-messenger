import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";
import { IMAGES } from "../../shared/ui/images";
import { ProfileBlock } from "../../modules/auth/ui/profile-block";
import { HEADER } from "../../shared/ui/header";
import { FOOTER } from "../../shared/ui/footer";
import { PostBlock } from "../../modules/auth/ui/post-block";

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="auto" />
            <HEADER/>
            <ScrollView style={{ flex: 1, backgroundColor: "#FAF8FF"}}>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                
            </ScrollView>
            <FOOTER/>
        </SafeAreaView>
    );
}
