import { Question } from "@/types/Question";
import { render } from "@testing-library/react-native";
import React from "react";
import QuestionList from "./QuestionList";

jest.mock("expo-blur", () => ({
  BlurView: jest.fn(({ children }) => children),
}));

const sampleQuestions: Question[] = [
  {
    id: 1,
    title: "How to water a cactus?",
    image_uri: "https://example.com/cactus.jpg",
    subtitle: "",
    uri: "",
    order: 1,
  },
  {
    id: 2,
    title: "Best sunlight for ferns",
    image_uri: "https://example.com/ferns.jpg",
    subtitle: "",
    uri: "",
    order: 2,
  },
];

describe("QuestionList", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<QuestionList questions={sampleQuestions} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders empty list gracefully", () => {
    const { getByText, queryByText } = render(<QuestionList questions={[]} />);
    expect(getByText("Get Started")).toBeTruthy();
    expect(queryByText("How to water a cactus?")).toBeNull();
  });
});
