import { Card } from "../../components/card/Card";
import { Dice } from "../dice/Dice";
import cardImg1 from "../../assets/card1-img.jpg";
import cardImg2 from "../../assets/card2-img.jpg";
import cardImg3 from "../../assets/card6-img.jpg";
import cardImg4 from "../../assets/michis1.jpg";
import cardImg5 from "../../assets/michis2.jpg";
import cardImg6 from "../../assets/michis3.jpg";

import "./cardContainer.css";

export const CardContainer = ({ diceNumber }) => {
  return (
    <div className="card__container">
      <h2 className="card__container__title">
        El resultado es: <Dice diceNumber={diceNumber} />
      </h2>
      {diceNumber === 1 && (
        <Card
          cardImg={cardImg1}
          cardFooter={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum! Velit voluptatum,"
          }
          cardButton="Comprar"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 2 && (
        <Card
          cardHeader="texto generico"
          cardImg={cardImg2}
          cardButton="Comprar"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 3 && (
        <Card
          cardHeader="texto generico"
          cardImg={cardImg3}
          cardFooter={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum! Velit voluptatum,"
          }
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 4 && (
        <Card
          cardHeader="texto generico"
          cardImg={cardImg4}
          cardButton="Comprar"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 5 && (
        <Card
          cardHeader="texto generico"
          cardImg={cardImg5}
          cardFooter={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum! Velit voluptatum,"
          }
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 6 && (
        <Card
          cardImg={cardImg6}
          cardFooter={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum! Velit voluptatum,"
          }
          cardButton="Comprar"
          diceNumber={diceNumber}
        />
      )}
    </div>
  );
};
