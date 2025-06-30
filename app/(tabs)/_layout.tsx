import { Tabs } from "expo-router";
import React from "react";

import DiagnoseIcon from "@/assets/icons/DiagnoseIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import MyGardenIcon from "@/assets/icons/MyGardenIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import CustomTabBar from "@/navigation/CustomTabBar";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#28AF6E",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          tabBarLabel: "Diagnose",
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color }) => <DiagnoseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarLabel: "",
          tabBarButton: CustomTabBar,
        }}
      />
      <Tabs.Screen
        name="mygarden"
        options={{
          title: "My Garden",
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color }) => <MyGardenIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: "RubikRegular",
    fontSize: 10,
  },
});
