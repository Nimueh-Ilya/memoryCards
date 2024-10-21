import Banner from "./Banner";
import Footer from "./Footer";
import GameCard from "./GameCard";

export default function MainContainer() {
  const shuffleArray = (arr: []) => {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
      const randomIndex: number = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
  };
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
