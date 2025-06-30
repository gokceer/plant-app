import { render } from "@testing-library/react-native";
import React from "react";
import QuestionCard from "./QuestionCard";

jest.mock("expo-blur", () => ({
  BlurView: jest.fn(({ children }) => children),
}));

describe("QuestionCard", () => {
  const mockProps = {
    image: "https://example.com/question-image.jpg",
    title: "Test Question Title",
  };

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<QuestionCard {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
