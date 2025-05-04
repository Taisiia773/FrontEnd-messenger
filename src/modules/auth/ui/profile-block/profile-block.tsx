import React from "react";
import { View, Text, Button } from "react-native";
import { useUserContext } from "../../context/userContext";
import { COLORS } from "../../../../shared/constants";
import { Link } from "expo-router";

export function ProfileBlock() {
    const { user, logout } = useUserContext();

    if (!user) {
        return (
            <View>
                <Text>Вы не авторизованы</Text>
                <Link href={"/login"} style={{ color: COLORS.black }}>
                    Login now
                </Link>
            </View>
        );
    }

    return (
        <View>
            <Text>Добро пожаловать, {user.username}!</Text>
            <Text>Email: {user.email}</Text>
            <Button title="Выйти" onPress={logout} />
        </View>
    );
}