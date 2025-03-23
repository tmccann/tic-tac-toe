import GameBoard from "./Components/GameBoard";
import Header from "./Components/Header";
import Player from "./Components/Player";
import { useCurrentPlayer } from "./utils";

import "./index.css";

const App = () => {
  const { currentPlayer, switchPlayer } = useCurrentPlayer();

  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            defaultName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard currentPlayer={currentPlayer} switchPlayer={switchPlayer} />
      </div>
    </main>
  );
};

export default App;
