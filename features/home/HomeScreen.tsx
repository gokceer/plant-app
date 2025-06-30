import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// eslint-disable-next-line import/no-unresolved
import { fetchCategories } from "@/redux/slices/categoriesSlice";
// eslint-disable-next-line import/no-unresolved
import { fetchQuestions } from "@/redux/slices/questionsSlice";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  CategoryList,
  HeaderSection,
  PremiumBanner,
  QuestionList,
} from "./components";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useAppSelector((state) => state.categories);

  const {
    data: questions,
    loading: questionsLoading,
    error: questionsError,
  } = useAppSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, [dispatch]);

  const isLoading = categoriesLoading || questionsLoading;
  const errorMessage = categoriesError || questionsError;

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" testID="activityIndicator" />
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View style={styles.centered}>
        <Text style={styles.sadEmoji}>😞</Text>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorSubtitle}>
          {errorMessage || "Try again later"}
        </Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.scrollContent}
        >
          <HeaderSection />
          <PremiumBanner />
          <QuestionList questions={questions} />
          <CategoryList categories={categories} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBFAFA",
  },
  scrollContent: {
    paddingBottom: 24,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorTitle: {
    fontFamily: "RubikRegular",
    fontSize: 18,
  },
  errorSubtitle: {
    fontFamily: "RubikLight",
    fontSize: 16,
  },
  sadEmoji: {
    fontSize: 28,
  },
});
