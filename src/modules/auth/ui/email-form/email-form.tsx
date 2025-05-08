import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { useRouter } from "expo-router";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const router = useRouter();

  // Функция для отправки кода на email
  const requestCode = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/usernative/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      if (result.status === "success") {
        Alert.alert("Успех", "Код отправлен на почту");
        setIsCodeSent(true);
      } else {
        Alert.alert("Ошибка", result.message);
      }
    } catch (error) {
      Alert.alert("Ошибка", "Не удалось отправить код");
    }
  };

  // Функция для подтверждения кода
  const verifyCode = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/usernative/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const result = await res.json();
      if (result.status === "success") {
        Alert.alert("Успех", "Email успешно подтвержден!");
        router.replace("/login"); // Перенаправление на страницу логина
      } else {
        Alert.alert("Ошибка", result.message);
      }
    } catch (error) {
      Alert.alert("Ошибка", "Не удалось подтвердить код");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {!isCodeSent ? (
        <>
          <Text>Введите ваш email для получения кода:</Text>
          <TextInput
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginVertical: 10,
              borderRadius: 5,
            }}
          />
          <Button title="Отправить код" onPress={requestCode} />
        </>
      ) : (
        <>
          <Text>Введите код, отправленный на ваш email:</Text>
          <TextInput
            autoCapitalize="none"
            value={code}
            onChangeText={setCode}
            placeholder="verificationCode"
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginVertical: 10,
              borderRadius: 5,
            }}
          />
          <Button title="Подтвердить" onPress={verifyCode} />
        </>
      )}
    </View>
  );
}