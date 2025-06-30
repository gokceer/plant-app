import { render } from "@testing-library/react-native";
import React from "react";
import UsageGuideSlide from "./UsageGuideSlide";

jest.mock("expo-linear-gradient", () => {
  const { View } = require("react-native");
  return {
    LinearGradient: View,
  };
});

describe("UsageGuideSlide", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<UsageGuideSlide />);
    expect(toJSON()).toMatchSnapshot();
  });
});
