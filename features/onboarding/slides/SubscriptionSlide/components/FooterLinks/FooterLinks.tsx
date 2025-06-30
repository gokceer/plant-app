import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FooterLinks = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Terms</Text>
      <Text style={styles.footerDot}>•</Text>
      <Text style={styles.footerText}>Privacy</Text>
      <Text style={styles.footerDot}>•</Text>
      <Text style={styles.footerText}>Restore</Text>
    </View>
  );
};

export default FooterLinks;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  footerText: {
    color: "#888",
    marginHorizontal: 6,
    fontSize: 14,
  },
  footerDot: {
    color: "#888",
    fontSize: 14,
  },
});
