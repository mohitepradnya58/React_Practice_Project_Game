import styled from "styled-components";
const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`img/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
