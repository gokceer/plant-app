import useOnboarding from "@/hooks/useOnboarding";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Footer from "./components/Footer";
import { createSlides } from "./utils/createSlides";

const OnboardingScreen = () => {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const { completeOnboarding } = useOnboarding();

  const handleDone = async () => {
    await completeOnboarding();
    router.replace("/(tabs)");
  };

  const slides = createSlides(handleDone);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.component}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: Dimensions.get("window").width,
          offset: Dimensions.get("window").width * index,
          index,
        })}
      />
      {![slides.length - 1].includes(currentIndex) && (
        <Footer
          onNext={handleNext}
          currentIndex={currentIndex}
          totalSlides={slides.length}
        />
      )}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
