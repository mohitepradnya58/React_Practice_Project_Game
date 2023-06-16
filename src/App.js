import React, { useState } from "react";
import StartGames from "./components/StartGames";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGames toggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
