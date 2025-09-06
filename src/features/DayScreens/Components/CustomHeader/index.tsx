import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles"; // ✅ stil dosyasını import ediyoruz

interface CustomHeaderProps {
    day: string;
}

export default function CustomHeader({ day }: CustomHeaderProps) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalPress = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.content}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.dayTitle}>{day}</Text>

                <TouchableOpacity onPress={handleModalPress}>
                    <Ionicons name="add" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Pressable style={styles.modalHeaderButton} onPress={() => setModalVisible(false)}>
                                <Ionicons name="close-outline" size={30} color="black" />
                            </Pressable>
                        </View>
                        <Text style={styles.modalText}>Hello World!</Text>


                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
