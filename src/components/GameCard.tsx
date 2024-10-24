import { ReactNode, useEffect, useState } from "react";

export default function GameCard({
  pokemonName,
  increaseScore,
  endGame,
  shuffle,
  cards,
  reset,
}: {
  pokemonName: string;
  increaseScore: () => void;
  endGame: () => void;
  shuffle: (arr: ReactNode[]) => void;
  cards: ReactNode[];
  reset: boolean;
}) {
  const [clicked, setClicked] = useState(false);
  const [pokemonData, setPokemonData] = useState<{
    sprites: { front_default: string };
  }>({
    sprites: { front_default: "" },
  });

  const handleClick = () => {
    if (clicked) {
      endGame();
    } else {
      setClicked(true);
      increaseScore();
      shuffle(cards);
    }
  };
  useEffect(() => {
    console.log("poo");
    setClicked(false);
  }, [reset]);
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemonData(data);
    }
    getPokemon();
  }, [pokemonName]);

  return (
    <button onClick={handleClick}>
      <div>
        <img src={pokemonData.sprites.front_default} alt={pokemonName} />
        <p>{pokemonName}</p>
      </div>
    </button>
  );
}
