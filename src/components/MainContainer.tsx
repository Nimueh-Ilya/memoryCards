import { ReactNode, useEffect, useState } from "react";
import Banner from "./Banner";
import GameCard from "./GameCard";

export default function MainContainer() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [cards, setCards] = useState<ReactNode[]>([]);
  const handleHighscore = (newScore: number) => {
    setHighscore(newScore);
  };
  const handleScore = () => {
    setScore((prevScore) => {
      if (++prevScore >= highscore) {
        handleHighscore(prevScore);
      }
      return prevScore;
    });

    console.log(score);
  };
  useEffect(() => {
    setCards([
      <GameCard
        key="pikachu"
        pokemonName="pikachu"
        endGame={endGame}
        increaseScore={increaseScore}
        shuffle={shuffleArray}
        cards={cards}
      />,
      <GameCard
        key="mewtwo"
        pokemonName="mewtwo"
        endGame={endGame}
        increaseScore={increaseScore}
        shuffle={shuffleArray}
        cards={cards}
      />,
      <GameCard
        key="ditto"
        pokemonName="ditto"
        endGame={endGame}
        increaseScore={increaseScore}
        shuffle={shuffleArray}
        cards={cards}
      />,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleArray = () => {
    setCards((prevCards) => {
      const shuffledCards = [...prevCards];
      let currentIndex = shuffledCards.length;

      while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
          shuffledCards[randomIndex],
          shuffledCards[currentIndex],
        ];
      }
      return shuffledCards;
    });
  };
  const endGame = () => {
    console.log(2);
  };
  const increaseScore = () => {
    handleScore();
  };

  return (
    <>
      <Banner></Banner>
      <div>Score:{score}</div>
      <div>Highest Score : {highscore}</div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">{cards}</div>
    </>
  );
}
