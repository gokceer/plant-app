import { fireEvent, render } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import React from "react";
import CustomTabBar from "./CustomTabBar";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("CustomTabBar Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<CustomTabBar />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("calls onPress when pressed", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    const { getByTestId } = render(<CustomTabBar />);
    fireEvent.press(getByTestId("customTabBarButton"));

    expect(mockPush).toHaveBeenCalledWith("/scan");
  });
});
