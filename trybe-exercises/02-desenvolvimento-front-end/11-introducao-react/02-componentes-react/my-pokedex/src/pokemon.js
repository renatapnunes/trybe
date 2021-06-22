import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        const { value, measurementUnit } = averageWeight;
        return (
            <section className='pokemon'>
                <p className='name'>{name}</p>
                <img className='image' src={image} alt={`${name} image`} />
                <p className='type'>{type}</p>
                <p className='weight'>Average weight: {value} {measurementUnit}</p>
            </section>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number
      }),
      image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;