import { CategoryImage } from "@/types/Category";
import { render } from "@testing-library/react-native";
import React from "react";
import CategoryBox from "./CategoryBox";

describe("CategoryBox Component", () => {
  const mockProps = {
    image: {
      url: "https://example.com/image1.jpg",
    } as CategoryImage,
    title: "Test Category",
  };

  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<CategoryBox {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
