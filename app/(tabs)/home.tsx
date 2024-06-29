import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex justify-around">
        <View className="gap-2">
          <View className="flex justify-center items-center bg-[#F98C20] py-8">
            <Ionicons name="construct-sharp" size={32} color={"white"} />
            <Text className="text-lg text-white text-clip" style={styles.title}>
              Emergency Pickup
            </Text>
          </View>
          <View className="flex justify-center items-center bg-[#F98C20] py-8">
            <Ionicons name="calendar-sharp" size={32} color={"white"} />
            <Text className="text-lg text-white" style={styles.title}>
              Schedule a Screening
            </Text>
          </View>
          <View className="flex justify-center items-center bg-[#F98C20] py-8">
            <Ionicons name="newspaper-sharp" size={32} color={"white"} />
            <Text className="text-lg text-white" style={styles.title}>
              Report an incident
            </Text>
          </View>
          <View className="flex justify-center items-center bg-[#F98C20] py-8">
            <Ionicons name="call-sharp" size={32} color={"white"} />
            <Text className="text-lg text-white" style={styles.title}>
              Contact Call Center
            </Text>
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
