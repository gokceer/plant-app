import React from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";

const ComingSoon = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/plantAppLogo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Coming Soon 🚀</Text>
    </SafeAreaView>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 12,
  },
  text: {
    fontFamily: "RubikMedium",
    fontSize: 16,
  },
});
