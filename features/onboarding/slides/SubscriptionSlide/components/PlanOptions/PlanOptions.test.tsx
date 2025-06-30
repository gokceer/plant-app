import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import PlanOptions from "./PlanOptions";

describe("PlanOptions", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<PlanOptions />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("initially selects the yearly plan", () => {
    const { getByTestId } = render(<PlanOptions />);

    const yearlyCard = getByTestId("planCardyearly");
    const monthlyCard = getByTestId("planCardmonthly");

    expect(yearlyCard.props?.accessibilityState?.selected).toBe(true);
    expect(monthlyCard.props?.accessibilityState?.selected).toBe(false);
  });

  it("changes selection when a plan card is pressed", () => {
    const { getByTestId } = render(<PlanOptions />);

    const monthlyCard = getByTestId("planCardmonthly");
    const yearlyCard = getByTestId("planCardyearly");

    expect(yearlyCard.props?.accessibilityState?.selected).toBe(true);
    expect(monthlyCard.props?.accessibilityState?.selected).toBe(false);

    fireEvent.press(monthlyCard);

    expect(monthlyCard.props?.accessibilityState?.selected).toBe(true);
    expect(yearlyCard.props?.accessibilityState?.selected).toBe(false);
  });
});
