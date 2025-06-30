import { render } from "@testing-library/react-native";
import React from "react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<SearchBar />);
    expect(toJSON()).toMatchSnapshot();
  });
});
