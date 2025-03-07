import { useState } from "react";

export type PlayerProps = {
  defaultName: string;
  symbol: "X" | "O";
};

// export type PlayerNameOnly = Pick<PlayerProps, "playerName">;

export const usePlayerUtils = (defaultName: string) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const onHandleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const onHandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPlayerName(e.target.value);
  };

  return { onHandleEdit, isEditing, playerName, onHandleNameChange };
};
