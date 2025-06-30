import { Redirect } from "expo-router";
import useOnboarding from "../hooks/useOnboarding";

export default function Index() {
  const { isOnboardingComplete, isLoading } = useOnboarding();

  if (isLoading) {
    return null;
  }

  return isOnboardingComplete ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(onboarding)" />
  );
}
