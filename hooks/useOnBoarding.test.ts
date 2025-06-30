import AsyncStorage from "@react-native-async-storage/async-storage";
import { act, renderHook } from "@testing-library/react-native";
import useOnboarding from "./useOnboarding";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("useOnboarding Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with loading state", async () => {
    const { result } = renderHook(() => useOnboarding());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isOnboardingComplete).toBeNull();

    await act(() => {});
  });

  it("should detect completed onboarding", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue("true");

    const { result } = renderHook(() => useOnboarding());

    await act(async () => {});

    expect(result.current).toEqual({
      isLoading: false,
      isOnboardingComplete: true,
      completeOnboarding: expect.any(Function),
    });
  });

  it("should handle onboarding completion", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const { result } = renderHook(() => useOnboarding());
    await act(() => {});

    await act(async () => {
      await result.current.completeOnboarding();
    });

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "@viewedOnboarding",
      "true"
    );
    expect(result.current.isOnboardingComplete).toBe(true);
  });

  it("should handle storage read error", async () => {
    (AsyncStorage.getItem as jest.Mock).mockRejectedValue(
      new Error("Failed to read")
    );

    const { result } = renderHook(() => useOnboarding());

    await act(async () => {});

    expect(result.current).toEqual({
      isLoading: false,
      isOnboardingComplete: false,
      completeOnboarding: expect.any(Function),
    });
  });

  it("should handle storage write error", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    (AsyncStorage.setItem as jest.Mock).mockRejectedValue(
      new Error("Failed to write")
    );

    const { result } = renderHook(() => useOnboarding());
    await act(() => {});

    await act(async () => {
      await result.current.completeOnboarding();
    });

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "@viewedOnboarding",
      "true"
    );
    expect(result.current.isOnboardingComplete).toBe(false);
  });
});
