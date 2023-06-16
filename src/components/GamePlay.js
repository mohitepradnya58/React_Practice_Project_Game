import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, Outlinebutton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainCOntainer>
      <div className="top_section">
        <Score score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Outlinebutton onClick={resetScore}>Reset Score</Outlinebutton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {" "}
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainCOntainer>
  );
};

export default GamePlay;

const MainCOntainer = styled.div`
  padding-top: 70px;
  width: 1180px;
  margin: 0 auto;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
