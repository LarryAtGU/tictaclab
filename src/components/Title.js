import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
export default function Title({
  title,
  fontSize = 30,
  height = 60,
  backgroundColor = colors.title,
}) {
  return (
    <View style={[styles.container, { backgroundColor, height }]}>
      <Text style={[styles.text, { fontSize }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    backgroundColor: colors.title,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
