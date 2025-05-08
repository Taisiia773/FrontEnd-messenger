import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { ICONS } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/constants";
import { styles } from "./post-block.styles";

export function PostBlock() {
    const tags = [
        "#відпочинок", "#натхнення", "#життя", "#природа",
        "#читання", "#спокій", "#гармонія"
    ];

    // const images = [
    //     require("../../assets/img1.jpg"),
    //     require("../../assets/img2.jpg"),
    //     require("../../assets/img3.jpg"),
    //     require("../../assets/img4.jpg"),
    //     require("../../assets/img5.jpg"),
    // ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                {/* <Image source={require("../../assets/avatar.jpg")} style={styles.avatar} /> */}
                <Text style={styles.username}>X_AE_A-13</Text>
            </View>

            <Text style={styles.text}>
                Інколи найкращі ідеї народжуються в тиші 🌿{"\n"}
                Природа, книга і спокій — усе, що потрібно, аби перезавантажитись.
            </Text>

            <Text style={styles.tags}>{tags.join(" ")}</Text>

            {/* <View style={styles.imageGrid}>
                {images.map((img, idx) => (
                    <Image key={idx} source={img} style={styles.image} />
                ))}
            </View> */}

            <View style={styles.footer}>
                <View style={styles.icons}>
                    <ICONS.LikeIcon width={20} height={20} />
                    <Text style={styles.footerText}>0 Вподобань</Text>
                </View>
                <View style={styles.icons}>
                    <ICONS.EyeIcon width={20} height={20} />
                    <Text style={styles.footerText}>0 Переглядів</Text>
                </View>
            </View>
        </ScrollView>
    );
}
