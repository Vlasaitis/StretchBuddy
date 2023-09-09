import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable } from "react-native";
import { Switch, VStack } from "native-base";
import { HomeStyles } from "../styles/screenStyles/HomeStyles";
import TimeSelectionModal from "../components/TimeSelectionModal";
import CircularProgressBar from "../components/CircularProgressBar";

function HomeScreen() {
  const defaultTime = {
    displayName: "",
    inSeconds: 0,
  };
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.topContainer}>
        <Text style={{ fontSize: 24, padding: 5 }}>Start Timer</Text>
        <Switch
          size="lg"
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isTimerEnabled ? "#f5dd4b" : "#f4f3f4"}
          onToggle={() => {
            setIsTimerEnabled((prevState) => !prevState);
            if (isTimerEnabled) {
              setSelectedTime(defaultTime);
            }
          }}
          isChecked={isTimerEnabled}
        />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={
            isTimerEnabled
              ? HomeStyles.selectButtonEnabled
              : HomeStyles.selectButtonDisabled
          }
          disabled={!isTimerEnabled}
        >
          <Text style={HomeStyles.selectButtonText}>Select Time</Text>
        </Pressable>
      </View>

      <TimeSelectionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      {/* Placeholders for countdown timer and circular progress bar */}
      <Text style={HomeStyles.regularText}>
        You will get a reminder every: {selectedTime.displayName}
      </Text>

      <View style={HomeStyles.progressBarContainer}>
        <CircularProgressBar
          isTimerEnabled={isTimerEnabled}
          selectedTime={selectedTime}
        ></CircularProgressBar>
      </View>
    </View>
  );
}

export default HomeScreen;
