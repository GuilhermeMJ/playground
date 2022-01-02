import { BoardState } from "../../types";

export type GameBoardProps = {
  squares: BoardState;
  shouldHighLight: (row: number, col: number) => boolean;
  onClickSquare: (row: number, col: number) => void;
};
