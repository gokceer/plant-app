import React from "react";
import { StyleSheet, View } from "react-native";

const RadioButton = ({ selected }: { selected: boolean }) => (
  <View
    style={[styles.radioOuter, selected && styles.radioOuterActive]}
    testID="radioOuterView"
  >
    {selected && <View style={styles.radioInner} testID="radioInnerView" />}
  </View>
);

export default RadioButton;

const styles = StyleSheet.create({
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF26",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterActive: {
    backgroundColor: "#28AF6E",
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
});
