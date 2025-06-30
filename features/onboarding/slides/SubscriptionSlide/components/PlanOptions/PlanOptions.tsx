import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PlanCard from "../PlanCard/PlanCard";

interface Plan {
  id: "monthly" | "yearly";
  title: string;
  description: string;
  badge?: string;
}

const PLANS: Plan[] = [
  {
    id: "monthly",
    title: "1 Month",
    description: "$2.99/month, auto renewable",
  },
  {
    id: "yearly",
    title: "1 Year",
    description: "First 3 days free, then $529.99/year",
    badge: "Save 50%",
  },
] as const;

type PlanId = Plan["id"];

const PlanOptions = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("yearly");

  return (
    <View style={styles.planContainer}>
      {PLANS.map((plan) => (
        <PlanCard
          testID={`planCard${plan.id}`}
          key={plan.id}
          title={plan.title}
          description={plan.description}
          badge={plan?.badge}
          selected={selectedPlan === plan.id}
          onPress={() => setSelectedPlan(plan.id)}
        />
      ))}
    </View>
  );
};

export default PlanOptions;

const styles = StyleSheet.create({
  planContainer: {
    marginTop: 20,
  },
});
