import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 p-5">
      <View>
        <View className="bg-slate-200 rounded-xl p-10">
          <Text className="text-center text-lg" style={styles.title}>
            In Progress
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center mt-5">
          <Text className="text-[16px]" style={styles.title}>
            Top Services
          </Text>
          <View className="flex flex-row items-center justify-center gap-2">
            <Text className="text-xs" style={styles.title}>
              View All
            </Text>
            <Ionicons name="search" size={14} />
          </View>
        </View>
        <View className="flex flex-row justify-center mt-4">
          <View className="flex justify-center items-center w-[118px] h-28  bg-blue-50 p-5 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Car Oil Change</Text>
          </View>
          <View className="flex justify-center items-center w-[118px] h-28  bg-green-50 p-5 ml-2 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Battery Replacement</Text>
          </View>
          <View className="flex justify-center items-center w-[118px] h-28  bg-orange-50 p-5 ml-2 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Flat Type</Text>
          </View>
        </View>
        <View className="flex flex-row justify-center items-center mt-5">
          <View className="flex justify-center items-center w-[118px] h-28 bg-purple-50 p-5 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Car Transmission</Text>
          </View>
          <View className="flex justify-center items-center w-[118px] h-28 bg-gray-50 p-5 ml-2 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Tinting Mirror</Text>
          </View>
          <View className="flex justify-center items-center w-[118px] h-28 bg-cyan-50 p-5 ml-2 rounded-2xl">
            <Ionicons name={"options"} size={26} />
            <Text className="text-[10px] text-center">Suspension Repair</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SpaceMono",
  },
});
