import './App.css';
import pokemons from './data';
import Pokedex from './pokedex';

function App() {
  return (
    <div className="App">
      <h1 className='title'>POKÉDEX</h1>
      <Pokedex pokemons={pokemons}/>
      <footer>Feito por Renata Nunes, usando React | Curso de Desenvolvimento Web - Trybe</footer>
    </div>
  );
}

export default App;
