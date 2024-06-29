import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderBar = () => (
  <SafeAreaView className="px-5">
    <View className="flex-row justify-between items-center">
      <View className="flex-row gap-3 items-center">
        <Ionicons name="person-circle-outline" size={40} />
        <Text className="text-lg font-semibold" style={styles.title}>
          Welcome back
        </Text>
      </View>
      <Image source={require("../../assets/images/triplea-logo.png")} className="w-24 h-24" />
    </View>
  </SafeAreaView>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Onboarding",
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Services",
          header: ({}) => <CustomHeaderBar />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "list" : "list-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Quick Actions",
          headerShown: true,
          header: ({}) => <CustomHeaderBar />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "grid" : "grid-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "My Account",
          header: ({}) => <CustomHeaderBar />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "person" : "person-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SpaceMono",
  },
});
