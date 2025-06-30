import React from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const FeatureOverviewSlide = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>
        Take a photo to
        <Text style={styles.titleBold}> identify </Text>
        {"\n"}the plant!
      </Text>
      <Image
        source={require("../../../../assets/images/featureOverview.png")}
        accessibilityLabel="Example of taking a photo to identify a plant"
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default FeatureOverviewSlide;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginLeft: 24,
    marginVertical: 12,
    fontFamily: "RubikMedium",
  },
  titleBold: {
    fontFamily: "RubikBold",
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.75,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
