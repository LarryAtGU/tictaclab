import { StyleSheet, View } from "react-native";
import Board from "../components/Board";
import Title from "../components/Title";
import TButton from "../components/TButton";
const plays = ["X", "O", "X", "", "", "X", "", "O", ""];
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Tic Tac Toe" />
        <Board plays={plays} />
        <View style={styles.buttonPanel}>
          <TButton label="Rules" fun={() => navigation.navigate("Rules")} />
          <TButton label="Credits" fun={() => navigation.navigate("Credits")} />
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonPanel: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
});
