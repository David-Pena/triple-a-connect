import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("home");
  };

  const handleSkip = () => {};

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.doneButton}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#AEE3E6",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/help.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Ask for immediate help",
            subtitle: "Send us your report and one of our technitian will find you",
          },
          {
            backgroundColor: "#e6cc88",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/schedule.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Schedule an screening",
            subtitle: "Submit your request and schedule an appointment in one of our centers",
          },
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/call-center.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Contact our Call Center",
            subtitle: "If you want any other kind of help, contact us through our call center",
          },
        ]}
        showSkip={false}
        showPagination={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "transparent",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});
