import ScanIcon from "@/assets/icons/ScanIcon";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const BUTTON_WIDTH = 60;

const CustomTabBar = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/scan")}
      style={styles.scanButtonContainer}
      testID="customTabBarButton"
    >
      <View style={styles.scanButton}>
        <ScanIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  scanButtonContainer: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -BUTTON_WIDTH / 2 }],
  },
  scanButton: {
    width: BUTTON_WIDTH,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#28AF6E",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderWidth: 4,
    borderColor: "#2CCC80",
  },
});

export default CustomTabBar;
