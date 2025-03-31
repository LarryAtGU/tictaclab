import { StyleSheet, View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import TButton from "../components/TButton";
import { getGames, deleteGame } from "../gameLogic/model";
export default function LoadGame() {
  const [games, setGames] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const games = getGames();
    setGames(games);
  }, []);
  const renderLabelValue = (label, value) => {
    return (
      <>
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        <Text style={{ paddingEnd: 10 }}>{value}</Text>
      </>
    );
  };
  const renderGame = ({ item }) => {
    const idx = games.findIndex((game) => game.id === item.id);
    return (
      <View style={styles.gamePanel}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          {renderLabelValue("", `(${idx + 1})`)}
          {renderLabelValue("ID: ", item.id)}
          {renderLabelValue("Steps: ", item.steps.length)}
          {renderLabelValue("Result: ", item.result)}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {renderLabelValue("Date: ", item.date)}
          {renderLabelValue("Time: ", item.time)}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TButton
            label="load"
            width={70}
            height={20}
            fontSize={12}
            fun={() => navigation.navigate("Home", { gameId: item.id })}
          />
          <TButton
            label="delete"
            width={70}
            height={20}
            fontSize={12}
            fun={() => {
              deleteGame(item.id);
              const games = getGames();
              setGames(games);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Load Game" />
        <View style={styles.loadPanel}>
          <FlatList
            data={games}
            renderItem={renderGame}
            keyExtractor={(item) => item.id}
          />
        </View>
        <TButton label="Back" fun={() => navigation.goBack()} />
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
  loadPanel: {
    width: "90%",
    height: "80%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#333",
    borderRadius: 10,
  },
  gamePanel: {
    // width: "90%",
    height: 80,
    backgroundColor: "#ccc",
    padding: 5,
    margin: 10,
    borderRadius: 5,
    justifyContent: "space-around",
  },
});
