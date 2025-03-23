import { useState } from "react";

export type PlayerProps = {
  defaultName: string;
  symbol: "X" | "O";
  isActive?: boolean;
};

export const usePlayerUtils = (defaultName: string) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const onHandleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const onHandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return { onHandleEdit, isEditing, playerName, onHandleNameChange };
};

export const useCurrentPlayer = () => {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const switchPlayer = () => {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  return { currentPlayer, switchPlayer };
};
