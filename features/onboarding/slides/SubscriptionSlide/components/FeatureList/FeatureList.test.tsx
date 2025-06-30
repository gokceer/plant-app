import { render } from "@testing-library/react-native";
import React from "react";
import FeatureList from "./FeatureList";

describe("FeatureList", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<FeatureList />);
    expect(toJSON()).toMatchSnapshot();
  });
});
