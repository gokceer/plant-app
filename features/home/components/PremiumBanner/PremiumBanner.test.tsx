import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import PremiumBanner from "./PremiumBanner";

jest.mock("@/components/GradientText/GradientText", () => ({
  __esModule: true,
  default: jest.fn(({ text }) => <>{text}</>),
}));

describe("PremiumBanner Component", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<PremiumBanner onPress={mockOnPress} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(<PremiumBanner onPress={mockOnPress} />);
    fireEvent.press(getByTestId("premiumBannerButton"));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
