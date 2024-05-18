import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

export const Dice = ({ diceNumber }) => {
  return (
    <>
      {diceNumber === 1 && <GiInvertedDice1 />}
      {diceNumber === 2 && <GiInvertedDice2 />}
      {diceNumber === 3 && <GiInvertedDice3 />}
      {diceNumber === 4 && <GiInvertedDice4 />}
      {diceNumber === 5 && <GiInvertedDice5 />}
      {diceNumber === 6 && <GiInvertedDice6 />}
    </>
  );
};
