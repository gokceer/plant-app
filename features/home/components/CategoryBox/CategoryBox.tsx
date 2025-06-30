import { CategoryImage } from "@/types/Category";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

// horizontal margin -> 24 + 24 and box gap -> 10
const HORIZONTAL_SPACE = 58;
const boxWidth = (screenWidth - HORIZONTAL_SPACE) / 2;

const CategoryBox = ({
  image,
  title,
}: {
  image: CategoryImage;
  title: string;
}) => {
  const boxHeight = boxWidth * 0.9;
  return (
    <View
      style={[styles.categoryBox, { height: boxHeight }]}
      testID="categoryBox"
    >
      <ImageBackground
        source={{ uri: image.url }}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.categoryTitle} numberOfLines={0}>
          {title}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  categoryBox: {
    width: boxWidth,
    marginRight: 10,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#29BB892E",
  },
  image: {
    flex: 1,
  },
  categoryTitle: {
    width: "80%",
    fontSize: 16,
    fontFamily: "RubikMedium",
    color: "#13231B",
    padding: 16,
  },
});
