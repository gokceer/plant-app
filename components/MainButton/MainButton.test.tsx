import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import MainButton from "./MainButton";

describe("MainButton Component", () => {
  const mockProps = {
    title: "Click Me",
    onPress: jest.fn(),
  };

  it("renders correctly and matches snapshot", () => {
    const { getByText } = render(<MainButton {...mockProps} />);
    expect(getByText(mockProps.title)).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(<MainButton {...mockProps} />);
    fireEvent.press(getByTestId("mainButton"));
    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
