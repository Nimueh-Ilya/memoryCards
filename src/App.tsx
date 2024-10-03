import "./App.css";

function App() {
  async function getPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
      response.json()
    );
  }
  return (
    <>
      <button
        onClick={() => {
          getPokemon().then((data) => {
            console.log(data);
          });
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
