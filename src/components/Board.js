import { View, StyleSheet } from "react-native";
import Cell from "./Cell";
export default function Board({ plays }) {
  return (
    <View style={styles.board}>
      {plays.map((p, idx) => (
        <Cell key={idx} play={p} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    backgroundColor: "orange",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: 25,
  },
});
