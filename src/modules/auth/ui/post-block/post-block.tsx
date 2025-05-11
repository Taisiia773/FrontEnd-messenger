import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { ICONS } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/constants";
import { styles } from "./post-block.styles";

export function PostBlock() {
    const tags = [
        "#відпочинок", "#натхнення", "#життя", "#природа",
        "#читання", "#спокій", "#гармонія"
    ];

    const images = [
        require("../../../../../assets/icon.png"),
        require("../../../../../assets/favicon.png"),
        require("../../../../../assets/adaptive-icon.png"),
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../../../../../assets/icon.png")} style={styles.avatar} />
                    <Text style={styles.username}>X_AE_A-13</Text>
                </View>
                <ICONS.DotsIcon width={20} height={20} />
            </View>

            <View style={styles.content}> 

                <View style={{ marginVertical: 8 }}>
                    <Text style={styles.text}>
                        Інколи найкращі ідеї народжуються в тиші 🌿{"\n"}
                        Природа, книга і спокій — усе, що потрібно, аби перезавантажитись.
                    </Text>

                    <Text style={styles.tags}>{tags.join(" ")}</Text>
                </View>

                {/* Uncomment this section to display images */}
                <View style={styles.imageGrid}>
                    {images.map((img, idx) => (
                        <Image key={idx} source={img} style={styles.image} />
                    ))}
                </View>

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

            </View>
        </View>
    );
}
