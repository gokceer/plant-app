import { render } from "@testing-library/react-native";
import React from "react";
import WelcomeSlide from "./WelcomeSlide";

describe("WelcomeSlide", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<WelcomeSlide />);
    expect(toJSON()).toMatchSnapshot();
  });
});
