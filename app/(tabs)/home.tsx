import ActionItem from "@/components/home/ActionItem";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex justify-around">
        <View className="gap-2">
          <ActionItem
            title="Emergency Pickup"
            icon={{ name: "construct-sharp", color: "white", size: 32 }}
            bgColor="#F98C20"
          />
          <ActionItem
            title="Schedule a Screening"
            icon={{ name: "calendar-sharp", color: "white", size: 32 }}
            bgColor="#F98C20"
          />
          <ActionItem
            title="Report an incident"
            icon={{ name: "newspaper-sharp", color: "white", size: 32 }}
            bgColor="#F98C20"
          />
          <ActionItem
            title="Contact Call Center"
            icon={{ name: "call-sharp", color: "white", size: 32 }}
            bgColor="#F98C20"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
