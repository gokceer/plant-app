import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import PlanCard from "./PlanCard";

describe("PlanCard", () => {
  const defaultProps = {
    title: "1 Year",
    description: "First 3 days free, then $529.99/year",
    selected: false,
    onPress: jest.fn(),
    testID: "planCard1year",
  };

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<PlanCard {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders badge when provided", () => {
    const props = { ...defaultProps, badge: "Save 50%" };
    const { getByText } = render(<PlanCard {...props} />);

    expect(getByText("Save 50%")).toBeTruthy();
  });

  it("does not render badge when not provided", () => {
    const { queryByText } = render(<PlanCard {...defaultProps} />);

    expect(queryByText("Save 50%")).toBeNull();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(<PlanCard {...defaultProps} />);
    const pressable = getByTestId(defaultProps.testID);

    fireEvent.press(pressable);
    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
});
