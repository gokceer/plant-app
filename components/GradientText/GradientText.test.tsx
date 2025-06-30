import { render } from "@testing-library/react-native";
import React from "react";
import GradientText from "./GradientText";

jest.mock("@react-native-masked-view/masked-view", () => {
  const { View } = require("react-native");
  return View;
});

jest.mock("expo-linear-gradient", () => {
  const { View } = require("react-native");
  return {
    LinearGradient: View,
  };
});

describe("GradientText", () => {
  it("renders the provided text", () => {
    const { getByText } = render(
      <GradientText
        text="Hello Gradient"
        colors={["#FF0000", "#00FF00", "#0000FF"]}
      />
    );

    expect(getByText("Hello Gradient")).toBeTruthy();
  });
});
