import { StyleSheet, Text, View } from "react-native";

const plays = ["X", "O", "X", "", "", "X", "", "O", ""];
const Cell = ({ play }) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.board}>
          {plays.map((p, idx) => (
            <Cell key={idx} play={p} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
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
