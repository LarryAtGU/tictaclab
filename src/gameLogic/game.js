export const playMove = (idx, steps, lastP) => {
  const newSteps = steps.slice(0, lastP);
  newSteps.push(idx);
  return newSteps;
};
export const buildBoard = (steps, lastP) => {
  const board = Array(9).fill("");
  for (let i = 0; i < lastP; ++i) {
    const c = i % 2 ? "O" : "X";
    board[steps[i]] = c;
  }
  return board;
};

export const getHint = (board) => {
  const winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const sides = ["X", "O"];
  for (const s of sides) {
    const hasWin = winCond.some((cond) => cond.every((p) => board[p] === s));
    if (hasWin) {
      const winArr = Array.from(
        new Set(winCond.filter((c) => c.every((p) => board[p] === s)).flat())
      );
      return [`${s} wins`, true, winArr];
    }
  }
  const [xMoves, oMoves] = board.reduce(
    (a, c) => {
      if (c === "X") return [a[0] + 1, a[1]];
      if (c === "O") return [a[0], a[1] + 1];
      return a;
    },
    [0, 0]
  );
  if (xMoves + oMoves === 9) return ["It is a tie", true];
  if (xMoves > oMoves) return ["O to play", false];
  return ["X to play", false];
};
