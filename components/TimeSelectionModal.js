import React from "react";
import { View, Modal, TouchableOpacity, Text, ScrollView } from "react-native";
import { HomeStyles } from "../styles/screenStyles/HomeStyles";

const timeOptions = [
  { displayName: "10 seconds", inSeconds: 10 },
  { displayName: "10 minutes", inSeconds: 600 },
  { displayName: "20 minutes", inSeconds: 1200 },
  { displayName: "30 minutes", inSeconds: 1800 },
  { displayName: "40 minutes", inSeconds: 2400 },
  { displayName: "50 minutes", inSeconds: 3000 },
  { displayName: "1 hour", inSeconds: 3600 },
];

function TimeSelectionModal({
  modalVisible,
  setModalVisible,
  setSelectedTime,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={HomeStyles.modalContainer}>
        <TouchableOpacity
          style={HomeStyles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={{ fontSize: 18, color: "black" }}>X</Text>
        </TouchableOpacity>
        <Text style={HomeStyles.modalTitle}>Select Time</Text>

        <ScrollView style={HomeStyles.timeOptionsContainer}>
          {timeOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={HomeStyles.timeOptionButton}
              onPress={() => {
                setSelectedTime(option);
                setModalVisible(false);
              }}
            >
              <Text style={HomeStyles.timeOptionText}>
                {option.displayName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

export default TimeSelectionModal;
