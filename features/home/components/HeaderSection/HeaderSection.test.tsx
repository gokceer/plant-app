import { render } from "@testing-library/react-native";
import React from "react";
import HeaderSection from "./HeaderSection";

const mockGetHours = (mockedHour: number) => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(mockedHour);
};

afterEach(() => {
  jest.restoreAllMocks();
});

describe("HeaderSection", () => {
  it("displays morning greeting between 5-12", () => {
    mockGetHours(6);
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Good Morning! 🌞")).toBeTruthy();
  });

  it("displays afternoon greeting between 12-17", () => {
    mockGetHours(13);
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Good Afternoon! 🌤️")).toBeTruthy();
  });

  it("displays evening greeting between 17-22", () => {
    mockGetHours(18);
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Good Evening! 🌥️")).toBeTruthy();
  });

  it("displays bight greeting otherwise", () => {
    mockGetHours(3);
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Good Night! 🌙")).toBeTruthy();
  });
});
