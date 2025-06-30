import {
  FeatureOverviewSlide,
  PaywallScreen,
  UsageGuideSlide,
} from "../slides";
import WelcomeSlide from "../slides/WelcomeSlide";

export const createSlides = (onDone: () => void) => [
  { key: "slide1", component: <WelcomeSlide /> },
  { key: "slide2", component: <FeatureOverviewSlide /> },
  { key: "slide3", component: <UsageGuideSlide /> },
  { key: "slide4", component: <PaywallScreen onCloseBtnPress={onDone} /> },
];
