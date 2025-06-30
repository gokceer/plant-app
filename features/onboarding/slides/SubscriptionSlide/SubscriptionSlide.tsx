import { MainButton } from "@/components";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  FeatureHeader,
  FeatureList,
  FooterLinks,
  PlanOptions,
  SubscriptionNote,
} from "./components";

const { width: screenWidth } = Dimensions.get("window");
const aspectRatio = 1125 / 1470;
const imageHeight = screenWidth / aspectRatio;

const SubscriptionSlide = ({
  onCloseBtnPress,
  onTryFreeBtnPress,
}: {
  onCloseBtnPress: () => void;
  onTryFreeBtnPress?: () => void;
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <Image
        source={require("../../../../assets/images/paywallPlant.png")}
        style={styles.topImage}
        resizeMode="cover"
      />
      <Pressable
        style={styles.closeButton}
        onPress={onCloseBtnPress}
        testID="closeButton"
      >
        <Image
          source={require("../../../../assets/icons/closeIcon.png")}
          style={{ width: 24, height: 24 }}
        />
      </Pressable>
      <View style={styles.content}>
        <FeatureHeader />
        <FeatureList />
        <PlanOptions />
        <MainButton
          title="Try free for 3 days"
          onPress={() => onTryFreeBtnPress?.()}
        />
        <SubscriptionNote />
        <FooterLinks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#101e17",
    width: screenWidth,
  },
  topImage: {
    width: screenWidth,
    height: imageHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    paddingTop: "70%",
    paddingHorizontal: 24,
  },
  closeButton: {
    position: "absolute",
    top: 55,
    right: 20,
  },
});

export default SubscriptionSlide;
