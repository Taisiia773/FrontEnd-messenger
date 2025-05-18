import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ICONS } from '../icons';
import { styles } from './header.styles';
import { COLORS } from '../../constants';
import { ModalWindow } from '../modal';

export function HEADER() {
    // const { logout } = useUserContext();
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')} 
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.rightSection}>
                {/* <TouchableOpacity style={styles.iconButton}>
                    <ICONS.AddIcon width={40} height={40} />
                </TouchableOpacity> */}
                <ModalWindow/>
                <TouchableOpacity style={styles.iconButton}>
                    <ICONS.SettingsIcon width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
                    <ICONS.LogutIcon width={40} height={40} />
                </TouchableOpacity>
            </View>
        </View>
  );
}

