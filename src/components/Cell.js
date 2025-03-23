import { View, StyleSheet, Text } from "react-native";

export default function Cell({ play }) {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    backgroundColor: "#090",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
