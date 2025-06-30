import { render } from "@testing-library/react-native";
import React from "react";
import SubscriptionNote from "./SubscriptionNote";

describe("SubscriptionNote", () => {
  it("renders correctly and matches snapshot", () => {
    const { toJSON } = render(<SubscriptionNote />);
    expect(toJSON()).toMatchSnapshot();
  });
});
