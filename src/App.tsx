import Header from "./Components/Header";
import Player from "./Components/Player";
import "./index.css";

const App = () => {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player 1" symbol="X" />
          <Player defaultName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
};

export default App;
