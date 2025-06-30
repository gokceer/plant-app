import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  const onNextMock = jest.fn();
  const totalSlides = 4;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders 'Get Started' button and terms text on first slide", () => {
    const { getByText, queryByTestId } = render(
      <Footer onNext={onNextMock} currentIndex={0} totalSlides={totalSlides} />
    );

    expect(getByText("Get Started")).toBeTruthy();
    expect(queryByTestId("dotsContainer")).toBeNull();
  });

  it("renders 'Continue' button and dots on other slides", () => {
    const currentIndex = 2;

    const { getByText, getByTestId } = render(
      <Footer
        onNext={onNextMock}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
      />
    );

    expect(getByText("Continue")).toBeTruthy();
    expect(getByTestId("dotsContainer")).toBeTruthy();
  });

  it("calls onNext when button is pressed", () => {
    const { getByText } = render(
      <Footer onNext={onNextMock} currentIndex={1} totalSlides={totalSlides} />
    );

    fireEvent.press(getByText("Continue"));
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});
