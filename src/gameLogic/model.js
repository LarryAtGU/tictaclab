import { loadData, saveData } from "./persistence";
let games = [];
const toStr = (v) => String(v).padStart(2, "0");
const getDateStr = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();
  const dayStr = `${toStr(day)}/${toStr(month)}/${year}`;
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const timeStr = `${toStr(hour)}:${toStr(minute)}:${toStr(second)}`;
  return [dayStr, timeStr];
};
const getNewID = () => {
  const currentMaxId = games.reduce((acc, cur) => Math.max(acc, cur.id), 0);
  return currentMaxId + 1;
};
export async function saveGame(steps, result) {
  const id = getNewID();
  const [date, time] = getDateStr();
  const newGame = { steps, result, date, time, id };
  games.push(newGame);
  await saveData(games);
}
export function loadGame(id) {
  const game = games.find((game) => game.id === id);
  return game;
}
export function getGames() {
  return games;
}
export async function deleteGame(id) {
  games = games.filter((game) => game.id !== id);
  await saveData(games);
}
async function init() {
  games = await loadData();
}
init();
