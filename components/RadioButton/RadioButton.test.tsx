import { render } from "@testing-library/react-native";
import React from "react";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  it("renders empty when not selected", () => {
    const { queryByTestId } = render(<RadioButton selected={false} />);
    expect(queryByTestId("radioInnerView")).toBeNull();
  });

  it("renders with inner circle when selected", () => {
    const { getByTestId } = render(<RadioButton selected={true} />);
    expect(getByTestId("radioInnerView")).toBeTruthy();
  });

  it("applies active styles when selected", () => {
    const { getByTestId } = render(<RadioButton selected={true} />);
    const outer = getByTestId("radioOuterView");
    expect(outer.props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: "#28AF6E" })
    );
  });
});
