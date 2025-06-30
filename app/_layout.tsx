import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import useOnboarding from "../hooks/useOnboarding";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isLoading } = useOnboarding();

  const [fontsLoaded] = useFonts({
    RubikRegular: require("../assets/fonts/Rubik-Regular.ttf"),
    RubikMedium: require("../assets/fonts/Rubik-Medium.ttf"),
    RubikBold: require("../assets/fonts/Rubik-Bold.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
  });

  useEffect(() => {
    if (!isLoading && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoading, fontsLoaded]);

  if (isLoading || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
