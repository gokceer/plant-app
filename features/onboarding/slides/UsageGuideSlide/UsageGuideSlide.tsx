import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const UsageGuideSlide = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>
        Get plant <Text style={styles.bold}>care guides</Text>
      </Text>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../../assets/images/blurredLeaves.png")}
          style={styles.blurredImage}
          accessibilityLabel="Blurred leaves background"
        />
        <Image
          source={require("../../../../assets/images/decorativeArtwork.png")}
          style={styles.topImage}
          accessibilityLabel="Decorative artwork"
        />
        <Image
          source={require("../../../../assets/images/iPhoneScreen.png")}
          style={styles.image}
          accessibilityLabel="Phone showing care guide"
        />

        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={styles.gradientOverlay}
          pointerEvents="none"
        />
      </View>
    </SafeAreaView>
  );
};

export default UsageGuideSlide;

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    marginBottom: 60,
    fontSize: 28,
    marginLeft: 24,
    fontFamily: "RubikMedium",
  },
  bold: {
    fontFamily: "RubikBold",
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.75,
    resizeMode: "contain",
  },
  topImage: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight * 0.4,
    top: -50,
    zIndex: 1,
  },
  blurredImage: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight * 0.4,
    top: -15,
    zIndex: -1,
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 120,
  },
});
