import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <section className='pokedex'>
                {this.props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </section>
        )
    }
}

export default Pokedex;