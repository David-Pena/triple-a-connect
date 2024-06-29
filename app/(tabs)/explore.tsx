import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text>This is sample #1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    // flexDirection: "row",
  },
});
