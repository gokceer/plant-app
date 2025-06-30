import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const WelcomeSlide = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.titleBold}>PlantApp</Text>
        </Text>
        <Text style={styles.subtitle}>
          {"Identify more than 3000+ plants with\n88% accuracy."}
        </Text>
      </View>
      <Image
        source={require("../../../../assets/images/welcomeSlidePlant.png")}
        style={styles.image}
        accessibilityLabel="Plant"
      />
    </SafeAreaView>
  );
};

export default WelcomeSlide;

const styles = StyleSheet.create({
  header: {
    marginTop: 12,
    marginBottom: 24,
    marginLeft: 24,
  },
  title: {
    fontSize: 28,
    color: "#000",
  },
  titleBold: {
    fontFamily: "RubikBold",
  },
  subtitle: {
    fontFamily: "RubikRegular",
    fontSize: 16,
    marginTop: 8,
    color: "#13231BB2",
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.65,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonWrapper: {
    marginHorizontal: 24,
  },
  termsText: {
    fontSize: 11,
    color: "#597165B2",
    textAlign: "center",
    lineHeight: 14,
    fontFamily: "RubikRegular",
    marginTop: 16,
  },
  linkText: {
    textDecorationLine: "underline",
  },
});
