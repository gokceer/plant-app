import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FeatureBox from "../FeatureBox/FeatureBox";

const features = [
  {
    icon: require("../../../../../../assets/icons/scanIcon.png"),
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    icon: require("../../../../../../assets/icons/fastIcon.png"),
    title: "Faster",
    subtitle: "Process",
  },
];

const FeatureList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureList;

const styles = StyleSheet.create({
  container: { height: 150, paddingTop: 20 },
});
