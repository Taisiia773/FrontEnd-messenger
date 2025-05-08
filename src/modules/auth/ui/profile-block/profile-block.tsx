import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useUserContext } from "../../context/userContext";
import { router } from "expo-router";
import { styles } from "./profile-block.styles";
import { PostBlock } from "../post-block";

export function ProfileBlock() {
    const { user } = useUserContext();

    useEffect(() => {
        if (!user) {
            router.replace("/login");
        }
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>Добро пожаловать, {user.username}!</Text>
            <Text>Добро пожаловать!</Text>
            <PostBlock />

        </View>
    );
}