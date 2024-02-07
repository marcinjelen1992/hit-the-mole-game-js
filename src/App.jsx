import { useState } from "react";
import "./App.css";
import { HitTheMoleGameScreenOne } from "./HitTheMoleGameScreenOne.jsx";
import { HitTheMoleGameScreenTwo } from "./HitTheMoleGameScreenTwo.jsx";

function App() {
  const [screenSwitch, setScreenSwitch] = useState(false);

  const DEFAULT_MOLE_GAME_TIME = [
    {
      isHighlightedTime: false,
    },
    {
      isHighlightedTime: false,
    },
    {
      isHighlightedTime: false,
    },
  ];

  const [exportItemsTime, setExportItemsTime] = useState(
    DEFAULT_MOLE_GAME_TIME
  );

  const DEFAULT_MOLE_GAME_MOLE = [
    {
      isHighlightedMole: false,
    },
    {
      isHighlightedMole: false,
    },
    {
      isHighlightedMole: false,
    },
  ];

  const [exportItemsMole, setExportItemsMole] = useState(
    DEFAULT_MOLE_GAME_MOLE
  );

  const [score, setScore] = useState(false);
  const congratulationsString = "Congratulations! Your score is ";
  return (
    <div className="moleGameWrapper">
      <h2>
        The goal is to follow the mole and click the box inside which the mole
        appears.
      </h2>
      <strong>
        {!screenSwitch && score ? congratulationsString + score : ""}
      </strong>
      {!screenSwitch ? (
        <HitTheMoleGameScreenOne
          screenSwitch={screenSwitch}
          setScreenSwitch={setScreenSwitch}
          exportItemsTime={exportItemsTime}
          setExportItemsTime={setExportItemsTime}
          exportItemsMole={exportItemsMole}
          setExportItemsMole={setExportItemsMole}
        />
      ) : (
        <HitTheMoleGameScreenTwo
          screenSwitch={screenSwitch}
          setScreenSwitch={setScreenSwitch}
          exportItemsTime={exportItemsTime}
          setExportItemsTime={setExportItemsTime}
          exportItemsMole={exportItemsMole}
          setExportItemsMole={setExportItemsMole}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default App;
