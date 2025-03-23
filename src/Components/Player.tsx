import { PlayerProps, usePlayerUtils } from "../utils";

const Player = ({ defaultName, symbol, isActive }: PlayerProps) => {
  const { isEditing, playerName, onHandleNameChange, onHandleEdit } =
    usePlayerUtils(defaultName);

  const player = !isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input value={playerName} onChange={onHandleNameChange} />
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {player}
        <span className="Player-symbol">{symbol}</span>
        <button onClick={onHandleEdit}>{!isEditing ? "Edit" : "Save"}</button>
      </span>
    </li>
  );
};

export default Player;
