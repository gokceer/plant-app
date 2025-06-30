import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import OnboardingScreen from "./OnboardingScreen";

const mockReplace = jest.fn();
const mockCompleteOnboarding = jest.fn().mockResolvedValue(undefined);

jest.mock("expo-router", () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

jest.mock("@/hooks/useOnboarding", () => ({
  __esModule: true,
  default: () => ({ completeOnboarding: mockCompleteOnboarding }),
}));

describe("OnboardingScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("handleNext advances the slide", () => {
    const { getByTestId, queryByTestId } = render(<OnboardingScreen />);

    const nextBtn = getByTestId("next0");
    expect(nextBtn).toBeTruthy();

    fireEvent.press(nextBtn);

    expect(queryByTestId("next0")).toBeNull();
  });

  it("navigates through all slides and completes onboarding", async () => {
    const { getByTestId } = render(<OnboardingScreen />);

    fireEvent.press(getByTestId("next0"));
    fireEvent.press(getByTestId("next1"));
    fireEvent.press(getByTestId("next2"));

    const closeBtn = getByTestId("closeButton");
    await fireEvent.press(closeBtn);

    expect(mockCompleteOnboarding).toHaveBeenCalled();
    expect(mockReplace).toHaveBeenCalledWith("/(tabs)");
  });
});
