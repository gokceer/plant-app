import { render } from "@testing-library/react-native";
import React from "react";
import FeatureHeader from "./FeatureHeader";

describe("FeatureHeader", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<FeatureHeader />);
    expect(toJSON()).toMatchSnapshot();
  });
});
