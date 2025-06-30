import { GradientText } from "@/components";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const PremiumBanner = ({ onPress }: { onPress?: () => void }) => {
  return (
    <Pressable
      style={styles.premiumBanner}
      onPress={() => onPress?.()}
      testID="premiumBannerButton"
    >
      <Image
        source={require("../../../../assets/icons/envelopeIcon.png")}
        style={styles.envelopeIcon}
      />
      <View style={styles.premiumTextContainer}>
        <GradientText
          text="FREE Premium Available"
          style={{ fontSize: 16, fontFamily: "RubikBold" }}
          colors={["#E5C990", "#E4B046"]}
        />
        <GradientText
          text="Tap to upgrade your account!"
          style={styles.premiumSubtitle}
          colors={["#FFDE9C", "#F5C25B"]}
        />
      </View>
      <Image
        source={require("../../../../assets/icons/arrowIcon.png")}
        style={styles.arrowIcon}
      />
    </Pressable>
  );
};

export default PremiumBanner;

const styles = StyleSheet.create({
  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    borderRadius: 12,
    padding: 16,
    margin: 24,
  },
  envelopeIcon: {
    width: 48,
    height: 40,
    textAlign: "center",
    alignSelf: "center",
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  premiumTextContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  premiumTitle: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 16,
  },
  premiumSubtitle: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "RubikRegular",
  },
});
