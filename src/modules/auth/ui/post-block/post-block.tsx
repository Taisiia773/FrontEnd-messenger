import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { ICONS } from "../../../../shared/ui/icons";
import { COLORS } from "../../../../shared/constants";
import { styles } from "./post-block.styles";
import { useEffect, useState } from "react";
import { ModalWindow } from "../../../../shared/ui/modal/modal2";

type Post = {
    id: string;
    email: string;
    title: string;
    topic?: string;
    description: string;
    url?: string;
    likes: number;
    views: number;
};

export function PostBlock() {
    // const tags = [
    //     "#відпочинок", "#натхнення", "#життя", "#природа",
    //     "#читання", "#спокій", "#гармонія"
    // ];

    // const images = [
    //     require("../../../../../assets/icon.png"),
    //     require("../../../../../assets/favicon.png"),
    //     require("../../../../../assets/adaptive-icon.png"),
    // ];

    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Загрузка данных постов из API
        const fetchPosts = async () => {
        try {
            const response = await fetch("http://172.20.10.7:5000/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Ошибка загрузки постов:", error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchPosts();
    }, []);

    const addNewPost = (newPost: Post) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
      };

    if (isLoading) {
        return <ActivityIndicator size="large" color={COLORS.grey} />;
    }

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.header}>
    //             <View style={{ flexDirection: "row", alignItems: "center" }}>
    //                 <Image source={require("../../../../../assets/icon.png")} style={styles.avatar} />
    //                 <Text style={styles.username}>X_AE_A-13</Text>
    //             </View>
    //             <ICONS.DotsIcon width={20} height={20} />
    //         </View>

    //         <View style={styles.content}> 

    //             <View style={{ marginVertical: 8 }}>
    //                 <Text style={styles.text}>
    //                     Інколи найкращі ідеї народжуються в тиші 🌿{"\n"}
    //                     Природа, книга і спокій — усе, що потрібно, аби перезавантажитись.
    //                 </Text>

    //                 <Text style={styles.tags}>{tags.join(" ")}</Text>
    //             </View>

    //             {/* Uncomment this section to display images */}
    //             <View style={styles.imageGrid}>
    //                 {images.map((img, idx) => (
    //                     <Image key={idx} source={img} style={styles.image} />
    //                 ))}
    //             </View>

    //             <View style={styles.footer}>
    //                 <View style={styles.icons}>
    //                     <ICONS.LikeIcon width={20} height={20} />
    //                     <Text style={styles.footerText}>0 Вподобань</Text>
    //                 </View>
    //                 <View style={styles.icons}>
    //                     <ICONS.EyeIcon width={20} height={20} />
    //                     <Text style={styles.footerText}>0 Переглядів</Text>
    //                 </View>
    //             </View>

    //         </View>
    //     </View>
    // );

    return (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              {/* Заголовок поста */}
              <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
                  <Image source={require("../../../../../assets/icon.png")} style={styles.avatar} />
                  <Text style={styles.username}>{item.email}</Text>
                </View>
                <ICONS.DotsIcon width={20} height={20} />
              </View>
    
              {/* Контент поста */}
              <View style={styles.content}>
                <Text style={styles.text}>{item.topic}</Text>
                <Text style={styles.tags}>{item.description}</Text>
    
                {/* Изображения поста */}
                {/* <View style={styles.imageGrid}>
                  {item.images.map((img, idx) => (
                    <Image key={idx} source={{ uri: img }} style={styles.image} />
                  ))}
                </View> */}
    
                {/* Футер поста */}
                <View style={styles.footer}>
                  <View style={styles.icons}>
                    <ICONS.LikeIcon width={20} height={20} />
                    <Text style={styles.footerText}>{item.likes} Вподобань</Text>
                  </View>
                  <View style={styles.icons}>
                    <ICONS.EyeIcon width={20} height={20} />
                    <Text style={styles.footerText}>{item.views} Переглядів</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      );
}
