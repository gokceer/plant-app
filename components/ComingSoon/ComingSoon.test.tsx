import { render } from "@testing-library/react-native";
import React from "react";
import ComingSoon from "./ComingSoon";

describe("ComingSoon Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<ComingSoon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
