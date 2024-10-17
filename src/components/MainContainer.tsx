import Banner from "./Banner";
import Footer from "./Footer";
import GameCard from "./GameCard";

export default function MainContainer() {
  const endGame = () => {
    console.log(2);
  };
  const increaseScore = () => {
    console.log(1);
  };
  return (
    <>
      <Banner></Banner>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <GameCard
          pokemonName="pikachu"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
        <GameCard
          pokemonName="mewtwo"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
        <GameCard
          pokemonName="ditto"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
        <GameCard
          pokemonName="ditto"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
        <GameCard
          pokemonName="ditto"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
        <GameCard
          pokemonName="ditto"
          endGame={endGame}
          increaseScore={increaseScore}
        ></GameCard>
      </div>
      <Footer></Footer>
    </>
  );
}
