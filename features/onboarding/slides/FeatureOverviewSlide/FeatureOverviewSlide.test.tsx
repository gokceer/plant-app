import { render } from "@testing-library/react-native";
import React from "react";
import FeatureOverviewSlide from "./FeatureOverviewSlide";

describe("FeatureOverviewSlide", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<FeatureOverviewSlide />);
    expect(toJSON()).toMatchSnapshot();
  });
});
