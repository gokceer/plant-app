import { Question } from "@/types/Question";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionList = ({ questions }: { questions: Question[] }) => {
  return (
    <View>
      <Text style={styles.title}>Get Started</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.container}
      >
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            image={question.image_uri}
            title={question.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default QuestionList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 15,
    fontFamily: "RubikMedium",
    color: "#13231B",
    marginBottom: 16,
    marginLeft: 24,
  },
});
