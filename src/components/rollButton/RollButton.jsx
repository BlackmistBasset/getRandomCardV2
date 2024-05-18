import { Dice } from "../dice/Dice";

import "./rollButton.css";

export const RollButton = ({ diceNumber, rollDiceFunction }) => {
  return (
    <button className="roll_button" onClick={rollDiceFunction}>
      <Dice diceNumber={diceNumber} />
      Roll!!
    </button>
  );
};
