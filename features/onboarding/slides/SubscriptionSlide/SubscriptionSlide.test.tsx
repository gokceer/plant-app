import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import SubscriptionSlide from "./SubscriptionSlide";

describe("SubscriptionSlide", () => {
  it("renders correctly and matches snapshot", () => {
    const mockOnClose = jest.fn();

    const { toJSON } = render(
      <SubscriptionSlide onCloseBtnPress={mockOnClose} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it("calls onCloseBtnPress when close is pressed", () => {
    const mockOnClose = jest.fn();

    const { getByTestId } = render(
      <SubscriptionSlide onCloseBtnPress={mockOnClose} />
    );

    const closeBtn = getByTestId("closeButton");
    fireEvent.press(closeBtn);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onTryFreeBtnPress when pressed", () => {
    const mockOnClose = jest.fn();
    const mockOnTryFree = jest.fn();
    const { getByTestId, getByText } = render(
      <SubscriptionSlide
        onCloseBtnPress={mockOnClose}
        onTryFreeBtnPress={mockOnTryFree}
      />
    );

    expect(getByText("Try free for 3 days")).toBeTruthy();

    const tryFreeBtn = getByTestId("mainButton");
    fireEvent.press(tryFreeBtn);

    expect(mockOnTryFree).toHaveBeenCalledTimes(1);
  });
});
