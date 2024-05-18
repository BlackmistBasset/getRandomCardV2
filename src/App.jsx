import { CardContainer } from "./components/cardContainer/CardContainer";
import { RollButton } from "./components/rollButton/RollButton";
import { useState } from "react";

function App() {
  const [diceNumber, setDiceNumber] = useState(3);

  const handleRollDice = () => {
    let number = parseInt(Math.random() * 6 + 1);
    setDiceNumber(number);
    console.log(diceNumber);
  };

  return (
    <>
      <RollButton diceNumber={diceNumber} rollDiceFunction={handleRollDice} />

      <CardContainer diceNumber={diceNumber} />
    </>
  );
}

export default App;
