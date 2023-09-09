import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { HomeStyles } from "../styles/screenStyles/HomeStyles";

function CircularProgressBar({ isTimerEnabled, selectedTime }) {
  const [timer, setTimer] = useState({ active: false, timeLeft: 0 });
  const [hasStarted, setHasStarted] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0);
  // comment
  useEffect(() => {
    console.log("Fill Percentage:" + fillPercentage);
    let interval;
    if (timer.active && timer.timeLeft > 0) {
      setHasStarted(true);
      interval = setInterval(() => {
        let newTimeLeft = timer.timeLeft - 1;
        setTimer((prevTimer) => ({
          ...prevTimer,
          timeLeft: newTimeLeft,
        }));
        setFillPercentage(100 - (newTimeLeft / selectedTime.inSeconds) * 100);
      }, 1000);
    } else if (hasStarted && timer.active && timer.timeLeft === 0) {
      console.log("Timer completed");
      setHasStarted(false);
      setFillPercentage(0);
      setTimer((prevTimer) => ({ ...prevTimer, active: false }));

      // Here you can add other actions like sending a notification
      clearInterval(interval);
    } else {
      setHasStarted(false);
      setFillPercentage(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer.active, timer.timeLeft]);

  useEffect(() => {
    console.log(selectedTime);
    if (isTimerEnabled && selectedTime) {
      setTimer({ active: true, timeLeft: selectedTime.inSeconds });
    } else {
      setTimer({
        active: false,
        timeLeft: selectedTime ? selectedTime.inSeconds : 0,
      });
    }
  }, [isTimerEnabled, selectedTime]);

  return (
    <View style={HomeStyles.progressBarContainer}>
      <AnimatedCircularProgress
        size={150}
        width={25}
        fill={fillPercentage}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        rotation={0}
        lineCap="round"
      >
        {(fill) => (
          <Text style={{ fontSize: 18 }}>
            {`${Math.floor(timer.timeLeft / 60)}:${(timer.timeLeft % 60)
              .toString()
              .padStart(2, "0")}`}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

export default CircularProgressBar;
