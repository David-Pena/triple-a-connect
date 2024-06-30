import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderBar = () => (
  <SafeAreaView className="px-5">
    <View className="flex-row justify-between items-center">
      <View className="flex-row gap-3 items-center">
        <Text className="text-lg font-semibold" style={styles.title}>
          Welcome back
        </Text>
      </View>
      <Ionicons name="person-circle-outline" size={40} color={"#F98C20"} />
    </View>
  </SafeAreaView>
);

const CustomServicesHeaderBar = () => (
  <SafeAreaView className="px-5 bg-slate-950 h-[200px]">
    <View className="flex flex-row justify-between">
      <View className="flex flex-row justify-between gap-2">
        <View className="flex justify-center items-center w-9 h-9 bg-gray-700 border-red-950 border-2 rounded-md">
          <Ionicons name={"person-outline"} color={"white"} size={24} />
        </View>
        <View className="flex justify-between items-start">
          <Text className="font-bold text-white" style={styles.title}>
            Hi, Adnan Khan
          </Text>
          <View className="flex flex-row gap-1">
            <Ionicons name={"search"} color={"d1d5db"} size={13} />
            <Text className="text-[10px] text-gray-300">AL, Karama</Text>
          </View>
        </View>
      </View>
      <Ionicons name={"notifications"} size={28} color={"white"} />
    </View>
  </SafeAreaView>
);

export default function TabLayout() {
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
          headerShown: true,
          header: ({}) => <CustomServicesHeaderBar />,
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
