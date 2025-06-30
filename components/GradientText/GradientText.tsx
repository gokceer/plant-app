import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

interface GradientTextProps {
  text: string;
  style?: any;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const GradientText: React.FC<GradientTextProps> = ({ text, style, colors }) => {
  return (
    <MaskedView maskElement={<Text style={[styles.text, style]}>{text}</Text>}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "RubikRegular",
  },
});

export default GradientText;
