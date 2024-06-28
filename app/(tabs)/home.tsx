import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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
    <View style={styles.container}>
      <View style={[styles.row, { height: 100 }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>All you need, right here</Text>
        </View>
      </View>

      <View style={styles.row}>
        {actions.slice(0, 2).map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {actions.slice(2, 4).map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContainerText: {
    fontFamily: "ProtoNerd",
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,

    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "100%", // Ensure items take full width of the container
  },
  itemContainer: {
    flex: 1,

    height: 130,
    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F98C20",
    padding: 20,
    marginHorizontal: 10, // Adjust spacing between items
  },
  item: {
    textAlign: "center",
    color: "white",
    fontFamily: "ProtoNerd",
    fontSize: 15,
  },
});
