import { ReactNode, useEffect, useState } from "react";

export default function GameCard({
  pokemonName,
  increaseScore,
  endGame,
  shuffle,
  cards,
}: {
  pokemonName: string;
  increaseScore: () => void;
  endGame: () => void;
  shuffle: (arr: ReactNode[]) => void;
  cards: ReactNode[];
}) {
  const [clicked, setClicked] = useState(false);
  const [pokemonData, setPokemonData] = useState<{
    sprites: { front_default: string };
  }>({
    sprites: { front_default: "" },
  });
  const handlePokemonData = (data: { sprites: { front_default: string } }) => {
    setPokemonData(data);
  };
  const handleClick = () => {
    if (clicked === true) {
      endGame();
      console.log("clicked it");
    } else {
      increaseScore();
      setClicked(true);
      shuffle(cards);
    }
  };

  useEffect(() => {
    async function getPokemon() {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
        (response) => response.json()
      );
    }
    getPokemon().then((data) => {
      handlePokemonData(data);
    });
  }, [pokemonName]);
  return (
    <>
      <button onClick={handleClick}>
        <div>
          <img src={pokemonData.sprites.front_default} alt="" />
          <p>{pokemonName}</p>
        </div>
      </button>
    </>
  );
}
