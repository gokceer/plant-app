import { render } from "@testing-library/react-native";
import React from "react";
import FeatureBox from "./FeatureBox";

describe("FeatureBox", () => {
  const props = {
    icon: { uri: "https://example.com/image1.jpg" },
    title: "Unlimited",
    subtitle: "Plant Identify",
  };

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<FeatureBox {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
