import React from "react";
import { StyleSheet, Text } from "react-native";

const FeatureHeader = () => {
  return (
    <>
      <Text style={styles.title}>
        <Text style={styles.appTitle}>PlantApp</Text> Premium
      </Text>
      <Text style={styles.subtitle}>Access All Features</Text>
    </>
  );
};

export default FeatureHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginBottom: 8,
    color: "white",
    fontFamily: "Rubik",
  },
  appTitle: {
    fontFamily: "RubikBold",
    fontSize: 30,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: "RubikLight",
    color: "#FFFFFFB2",
  },
});
