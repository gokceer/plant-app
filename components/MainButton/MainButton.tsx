import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface MainButtonProps {
  title: string;
  testID?: string;
  onPress: () => void;
}

const MainButton = ({ title, testID, onPress }: MainButtonProps) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      testID={testID || "mainButton"}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28AF6E",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
