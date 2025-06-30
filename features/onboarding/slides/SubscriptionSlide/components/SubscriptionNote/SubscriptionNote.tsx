import React from "react";
import { StyleSheet, Text } from "react-native";

const SubscriptionNote = () => {
  return (
    <Text style={styles.note}>
      After the 3-day free trial period you’ll be charged ₺274.99 per year
      unless you cancel before the trial expires. Yearly Subscription is
      Auto-Renewable
    </Text>
  );
};

export default SubscriptionNote;

const styles = StyleSheet.create({
  note: {
    fontFamily: "RubikLight",
    color: "#FFFFFF85",
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
  },
});
