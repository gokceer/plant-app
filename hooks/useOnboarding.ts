import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useOnboarding = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<
    boolean | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("@viewedOnboarding");
        setIsOnboardingComplete(value === "true");
      } catch (error) {
        console.error("Error reading onboarding status:", error);
        setIsOnboardingComplete(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("@viewedOnboarding", "true");
      setIsOnboardingComplete(true);
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  };

  return { isOnboardingComplete, isLoading, completeOnboarding };
};

export default useOnboarding;
