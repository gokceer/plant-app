import { MainButton } from "@/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FooterProps = {
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
};

const Footer = ({ onNext, currentIndex, totalSlides }: FooterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <MainButton
          title={currentIndex === 0 ? "Get Started" : "Continue"}
          onPress={onNext}
          testID={`next${currentIndex}`}
        />
      </View>

      {currentIndex === 0 ? (
        <Text style={styles.termsText}>
          By tapping next, you are agreeing to PlantID{"\n"}
          <Text style={styles.linkText}>Terms of Use</Text> &{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      ) : (
        <View style={styles.dots} testID="dotsContainer">
          {Array.from({ length: totalSlides }).map((_, index) =>
            index !== 0 ? (
              <View
                key={index}
                style={[styles.dot, currentIndex === index && styles.dotActive]}
              />
            ) : null
          )}
        </View>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 27.5,
  },
  buttonWrapper: {
    marginHorizontal: 24,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32.5,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  dotActive: {
    backgroundColor: "#13231B",
    width: 10,
    height: 10,
    borderRadius: 5,
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
