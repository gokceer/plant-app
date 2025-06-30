import { render } from "@testing-library/react-native";
import React from "react";
import FooterLinks from "./FooterLinks";

describe("FooterLinks", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<FooterLinks />);
    expect(toJSON()).toMatchSnapshot();
  });
});
