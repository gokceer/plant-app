import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCategories } from "@/redux/slices/categoriesSlice";
import { fetchQuestions } from "@/redux/slices/questionsSlice";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
jest.mock("@/redux/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("@/redux/slices/categoriesSlice", () => ({
  fetchCategories: jest.fn(() => ({ type: "fetchCategories" })),
}));
jest.mock("@/redux/slices/questionsSlice", () => ({
  fetchQuestions: jest.fn(() => ({ type: "fetchQuestions" })),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
});

describe("HomeScreen", () => {
  it("renders loading state", () => {
    (useAppSelector as jest.Mock).mockImplementation((selectorFn) => {
      return selectorFn({
        categories: { data: [], loading: true, error: null },
        questions: { data: [], loading: false, error: null },
      });
    });

    render(<HomeScreen />);
    expect(screen.getByTestId("activityIndicator")).toBeTruthy();
  });

  it("renders error state", () => {
    (useAppSelector as jest.Mock).mockImplementation((selectorFn) => {
      return selectorFn({
        categories: { data: [], loading: false, error: "Failed to load" },
        questions: { data: [], loading: false, error: null },
      });
    });

    render(<HomeScreen />);
    expect(screen.getByText("Something went wrong")).toBeTruthy();
    expect(screen.getByText("Failed to load")).toBeTruthy();
  });

  it("renders success state", () => {
    (useAppSelector as jest.Mock).mockImplementation((selectorFn) => {
      return selectorFn({
        categories: {
          data: [
            {
              id: 1,
              title: "Nature",
              image: { url: "https://example.com/image1.jpg" },
            },
          ],
          loading: false,
          error: null,
        },
        questions: {
          data: [
            {
              id: 1,
              title: "What is a tree?",
              image_uri: "https://example.com/image2.jpg",
            },
          ],
          loading: false,
          error: null,
        },
      });
    });

    const { getByText } = render(<HomeScreen />);
    expect(getByText("Nature")).toBeTruthy();
    expect(getByText("What is a tree?")).toBeTruthy();
  });

  it("dispatches fetch actions on mount", () => {
    (useAppSelector as jest.Mock).mockImplementation((selectorFn) => {
      return selectorFn({
        categories: { data: [], loading: true, error: null },
        questions: { data: [], loading: true, error: null },
      });
    });

    render(<HomeScreen />);
    expect(mockDispatch).toHaveBeenCalledWith(fetchCategories());
    expect(mockDispatch).toHaveBeenCalledWith(fetchQuestions());
  });
});
