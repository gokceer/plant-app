import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FeatureBox = ({
  icon,
  title,
  subtitle,
}: {
  icon: ImageSourcePropType;
  title: string;
  subtitle: string;
}) => (
  <View style={styles.featureBox}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureSubtitle}>{subtitle}</Text>
  </View>
);

export default FeatureBox;

const styles = StyleSheet.create({
  featureBox: {
    backgroundColor: "#FFFFFF14",
    padding: 16,
    borderRadius: 12,
    width: 156,
    height: 130,
    marginRight: 8,
  },
  icon: {
    width: 36,
    height: 36,
  },
  featureTitle: {
    color: "#fff",
    fontFamily: "RubikMedium",
    fontSize: 20,
    paddingTop: 16,
  },
  featureSubtitle: {
    color: "#FFFFFFB2",
    fontFamily: "RubikRegular",
    fontSize: 12,
    ...Platform.select({ ios: { paddingTop: 4 } }),
  },
});
