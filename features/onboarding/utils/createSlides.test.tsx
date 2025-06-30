import {
  FeatureOverviewSlide,
  PaywallScreen,
  UsageGuideSlide,
  WelcomeSlide,
} from "../slides";
import { createSlides } from "./createSlides";

describe("createSlides", () => {
  const onDone = jest.fn();

  const slides = createSlides(onDone);

  it("returns an array of 4 slides", () => {
    expect(slides).toHaveLength(4);
  });

  it("returns slides with correct keys", () => {
    expect(slides.map((s) => s.key)).toEqual([
      "slide1",
      "slide2",
      "slide3",
      "slide4",
    ]);
  });

  it("returns slides with correct component types", () => {
    expect(slides[0].component.type).toBe(WelcomeSlide);
    expect(slides[1].component.type).toBe(FeatureOverviewSlide);
    expect(slides[2].component.type).toBe(UsageGuideSlide);
    expect(slides[3].component.type).toBe(PaywallScreen);
  });

  it("passes onDone prop as onCloseBtnPress to PaywallScreen", () => {
    expect(slides[3].component.props.onCloseBtnPress).toBe(onDone);
  });
});
