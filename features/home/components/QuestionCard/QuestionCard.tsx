import { BlurView } from "expo-blur";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const QuestionCard = ({ image, title }: { image: string; title: string }) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={styles.questionSection}>
        <BlurView style={styles.blurView}>
          <Text style={styles.questionText}>{title}</Text>
        </BlurView>
      </View>
    </ImageBackground>
  </View>
);

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: 240,
    height: 164,
    marginRight: 10,
  },
  image: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: "hidden",
  },
  questionSection: {
    flex: 1,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    overflow: "hidden",
  },
  blurView: {
    marginTop: 100,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1,
  },
  questionText: {
    color: "#fff",
    paddingTop: 10,
    fontFamily: "RubikRegular",
    fontSize: 15,
    paddingHorizontal: 14,
  },
});
