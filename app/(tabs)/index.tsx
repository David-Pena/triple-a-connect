import { StyleSheet, Text, Image, Platform, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle: "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
