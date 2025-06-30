import { Category } from "@/types/Category";
import { render } from "@testing-library/react-native";
import React from "react";
import CategoryList from "./CategoryList";

describe("CategoryList Component", () => {
  const mockCategories: Category[] = [
    {
      id: 1,
      title: "Category 1",
      image: { url: "https://example.com/image1.jpg" },
    },
    {
      id: 2,
      title: "Category 2",
      image: { url: "https://example.com/image2.jpg" },
    },
    {
      id: 3,
      title: "Category 3",
      image: { url: "https://example.com/image3.jpg" },
    },
    {
      id: 4,
      title: "Category 4",
      image: { url: "https://example.com/image4.jpg" },
    },
  ];

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<CategoryList categories={mockCategories} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("handles empty categories array", () => {
    const { queryByTestId } = render(<CategoryList categories={[]} />);
    const categoryBoxes = queryByTestId("categoryBox");

    expect(categoryBoxes).toBeNull();
  });
});
