import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../constants";
import { Input } from "../input";
import { Button } from "../button";
import { PublishSendButtonImage, AddEmojiImage, AddImageImage } from "../images/images";
import { styles } from "./modal.styles";
import { ICONS } from "../icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthToken } from "../../tools/authStorage";

export function ModalWindow() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    topic: "",
    description: "",
    url: "",
  });

  const handleModal = () => setIsModalVisible(!isModalVisible);

  const handleInputChange = (field: keyof PostData, value: string) => {
    setPostData({ ...postData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      
      if (!postData.title || !postData.description) {
        Alert.alert("Ой!", "Название и описание обязательны 🐾");
        return;
      }
  
      const token = await getAuthToken();
      if (!token) { 
        Alert.alert("Ошибка", "Не удалось получить токен");
        return;
      }

      const response = await fetch('http://172.20.10.7:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: postData.title,
          description: postData.description,
          topic: postData.topic || null,
          url: postData.url || null
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при создании поста');
      }
  
      const data = await response.json();
      Alert.alert("Ура!", "Пост опубликован! 🎉");

      handleModal();
      setPostData({ title: "", topic: "", description: "", url: "" });
      
    } catch (error) {
      console.error('Ошибка:', error);
      Alert.alert("Ошибка", "Не удалось создать пост");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={handleModal}>
        <ICONS.AddIcon width={40} height={40} />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleModal}
        onBackButtonPress={handleModal}
        onSwipeComplete={handleModal}
        swipeDirection="down"
      >
        <View style={styles.mainContainer}>
          {/* Кнопка закрытия */}
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={handleModal}
          >
            <Text>close</Text>
            {/* <CloseIcon width={24} height={24} color={COLORS.black} /> */}
          </TouchableOpacity>

          <Text style={styles.textCreate}>Создание публикации</Text>

          <View style={styles.containerSettings}>
            {/* Название */}
            <View style={styles.containerName}>
              <Text style={styles.textNameCreate}>Название</Text>
              <Input
                placeholder="Введите название"
                value={postData.title}
                onChangeText={(text) => handleInputChange("title", text)}
              />
            </View>

            {/* Тема */}
            <View>
              <Text style={styles.textTopiceCreate}>Тема</Text>
              <Input
                placeholder="Например, 'Котики'"
                value={postData.topic}
                onChangeText={(text) => handleInputChange("topic", text)}
              />
            </View>

            {/* Описание */}
            <View>
              <Text style={styles.textTopiceCreate}>Описание</Text>
              <View style={styles.inputBoxDescription}>
                <TextInput
                  multiline
                  placeholder="Расскажите что-то интересное..."
                  value={postData.description}
                  onChangeText={(text) => handleInputChange("description", text)}
                  style={{ minHeight: 100 }}
                />
              </View>
            </View>

            {/* Ссылка */}
            <View>
              <Text style={styles.textUrlCreate}>Ссылка (необязательно)</Text>
              <Input
                placeholder="https://example.com"
                value={postData.url}
                onChangeText={(text) => handleInputChange("url", text)}
              />
            </View>
          </View>

          {/* Кнопки */}
          <View style={styles.footerButtons}>
            <TouchableOpacity>
              <AddEmojiImage />
            </TouchableOpacity>
            <TouchableOpacity>
              <AddImageImage />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttonPublish}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <>
                  <Text style={styles.TextColor}>Опубликовать</Text>
                  <PublishSendButtonImage />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}