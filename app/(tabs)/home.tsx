import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [actions, setActions] = useState([
    {
      id: 1,
      title: "Emergency Pickup",
      icon: "",
    },
    {
      id: 2,
      title: "Schedule a Screening",
      icon: "",
    },
    {
      id: 3,
      title: "Report an incident",
      icon: "",
    },
    {
      id: 4,
      title: "Contact Call Center",
      icon: "",
    },
  ]);

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between">
        <View>
          <Text>Hola</Text>
        </View>
        <View>
          <Text>Mundo</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
