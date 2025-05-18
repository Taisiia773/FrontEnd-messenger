import {useState} from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { COLORS } from "../../constants"
import { Input } from "../input";
import { Button } from "../button";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PublishSendButtonImage, AddEmojiImage, AddImageImage } from "../images/images"
import { styles } from "./modal.styles";
import { ICONS } from "../icons";

export function ModalWindow() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleModal = () => setIsModalVisible(() => !isModalVisible)
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Modal</Text>
      <View style={styles.containerFrist} /> */}
      <TouchableOpacity style={styles.iconButton} onPress={handleModal}>
        <ICONS.AddIcon width={40} height={40} />
      </TouchableOpacity>
      {/* <Button label="button" onPress={handleModal} /> */}
      <Modal isVisible={isModalVisible} 
      // onBackdropPress={handleModal} 
      onBackButtonPress={handleModal}>
        <View style={styles.mainContainer}>
          <TouchableOpacity 
              style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
              onPress={handleModal}
            ><Text>close</Text></TouchableOpacity>
            <Text style={styles.textCreate}>Створення публікації!</Text>

            <View style={styles.containerSettings}>
            <View style={styles.containerName}>
              <Text style={styles.textNameCreate}>Назва публікації</Text>
              <Input placeholder="Назва публікації" style={styles.inputName}/>
            </View>

            <View>
              <Text style={styles.textTopiceCreate}>Тема публікації</Text>
              <Input placeholder="Напишіть тему публікації" style={styles.inputTopic}/>
            </View>

            <View>
              {/* <Input placeholder="Напишіть опис публікації" style={styles.inputDescription}/>
               */}
              <View>
                  <View style={styles.inputBoxDescriptionContainer}>
                      <SafeAreaView>
                          <TextInput editable multiline placeholder="Напишіть опис публікації" style={styles.inputBoxDescription} />
                      </SafeAreaView>
                  </View>

        </View>

            <View>
                <Text style={styles.textUrlCreate}>Посилання</Text>
                <Input placeholder="Напишіть посилання" style={styles.inputUrl}/>
            </View>

          </View>

          </View>
          
          
          <View style={{marginTop: 30, marginLeft: 30, flexDirection: "row", justifyContent: "flex-end", gap: 10, alignItems: "center"}}>
            {/* <Button label="Публикація" onPress={handleModal} style={styles.buttonPublish}/> */}
            <TouchableOpacity><AddEmojiImage></AddEmojiImage></TouchableOpacity>
            <TouchableOpacity><AddImageImage></AddImageImage></TouchableOpacity>
            
            <TouchableOpacity
                        style={styles.buttonPublish}
                        onPress={handleModal} >
                        <Text style={styles.TextColor}>Публикація</Text><PublishSendButtonImage></PublishSendButtonImage>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

