import React from 'react';

class Input extends React.Component {
  render() {
    const { id, value, name, onChange, label, type, isRequired = true } = this.props;
    return(
      <label htmlFor={ id }>
        { label }
        <input
          id={ id }
          value={ value }
          name={ name }
          onChange={ onChange }
          type={ type }
          isRequired={ isRequired }
        />
      </label>
    );
  }
}

export default Input;
  
  