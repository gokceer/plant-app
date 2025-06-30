import { RadioButton } from "@/components";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PlanCard = ({
  title,
  description,
  selected,
  badge,
  testID,
  onPress,
}: {
  title: string;
  description: string;
  selected: boolean;
  badge?: string;
  testID: string;
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="radio"
    accessibilityState={{ selected }}
    style={[styles.planBox, selected ? styles.activePlan : styles.inactivePlan]}
    testID={testID}
  >
    <View style={styles.radioRow}>
      <RadioButton selected={selected} />
      <View style={{ flex: 1 }}>
        <View style={styles.planHeader}>
          <Text style={styles.planTitle}>{title}</Text>
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>
        <Text style={styles.planText}>{description}</Text>
      </View>
    </View>
  </Pressable>
);

export default PlanCard;

const styles = StyleSheet.create({
  planBox: {
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
  },
  inactivePlan: {
    backgroundColor: "#FFFFFF0D",
  },
  activePlan: {
    borderColor: "#28AF6E",
    borderWidth: 1.5,
  },
  planTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "RubikMedium",
  },
  planText: {
    color: "#FFFFFFB2",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "RubikLight",
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  badge: {
    backgroundColor: "#34C759",
    paddingHorizontal: 12,
    paddingVertical: 4,
    position: "absolute",
    right: -16,
    top: -16,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 20,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "RubikMedium",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
