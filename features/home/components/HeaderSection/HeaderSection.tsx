import { SearchBar } from "@/components";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const aspectRatio = 1125 / 525;
const imageHeight = screenWidth / aspectRatio;

const HeaderSection = () => {
  const getGreeting = (): string => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good Morning! 🌞";
    if (hour >= 12 && hour < 17) return "Good Afternoon! 🌤️";
    if (hour >= 17 && hour < 22) return "Good Evening! 🌥️";
    return "Good Night! 🌙";
  };

  return (
    <ImageBackground
      source={require("../../../../assets/images/headerBackground.png")}
      style={styles.bannerImage}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Hi, plant lover!</Text>
        <Text style={styles.subtitle}>{getGreeting()}</Text>
        <SearchBar />
      </View>
    </ImageBackground>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  bannerImage: {
    width: screenWidth,
    height: imageHeight,
    justifyContent: "center",
  },
  headerContainer: {
    marginHorizontal: 24,
  },
  title: {
    fontFamily: "RubikRegular",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "RubikMedium",
    fontSize: 24,
    marginTop: 6,
  },
});
