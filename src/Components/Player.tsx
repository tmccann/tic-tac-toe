import { useState } from "react";
import { PlayerProps } from "../utils";

const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsediting] = useState(false);

  const onEdit = () => {
    setIsediting((isEditing) => !isEditing);
  };
  const playerName = isEditing ? (
    <input value={name} />
  ) : (
    <span className="player-name">{name}</span>
  );
  isEditing;
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="Player-symbol">{symbol}</span>
        <button
          onClick={() => {
            onEdit();
          }}
        >
          Edit
        </button>
      </span>
    </li>
  );
};

export default Player;
