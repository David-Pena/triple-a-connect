import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  icon: Icon;
  bgColor: string;
}

interface Icon {
  name: any;
  color: string;
  size: number;
}

const ActionItem = ({ title, icon, bgColor }: Props) => {
  const { name, color, size } = icon;

  return (
    <View
      className="flex justify-center items-center py-8"
      style={{ backgroundColor: bgColor }}
    >
      <Ionicons name={name} size={size} color={color} />
      <Text className="text-lg text-white text-clip" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default ActionItem;

const styles = StyleSheet.create({
  title: {
    fontFamily: "SpaceMono",
  },
});
