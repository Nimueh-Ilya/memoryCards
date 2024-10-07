import { useState } from "react";

export default function GameCard({
  pokemonName,
  increaseScore,
  endGame,
}: {
  pokemonName: string;
  increaseScore: () => undefined;
  endGame: () => void;
}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (clicked === true) {
      endGame();
      console.log("clicked it");
    } else {
      increaseScore();
      setClicked(true);
    }
  };
  return (
    <>
      <button onClick={handleClick}>
        <div>
          <img src="" alt="" />
          <p>{pokemonName}</p>
        </div>
      </button>
    </>
  );
}
