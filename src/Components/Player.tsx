import { PlayerProps, usePlayerUtils } from "../utils";

const Player = ({ defaultName, symbol }: PlayerProps) => {
  const { isEditing, onHandleEdit, onHandleNameChange, playerName } =
    usePlayerUtils(defaultName);
  const playerEditName = isEditing ? (
    <input value={playerName} onChange={onHandleNameChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li>
      <span className="player">
        {playerEditName}
        <span className="Player-symbol">{symbol}</span>
        <button onClick={onHandleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
