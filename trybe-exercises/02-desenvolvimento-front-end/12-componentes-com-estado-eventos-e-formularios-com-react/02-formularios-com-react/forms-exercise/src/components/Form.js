import React, { Component } from 'react';
import Input from './Input';

const inputs = [
 {
  type: "text",
  id: "nome",
  name: "nome",
  label: "Nome",
  value: "",
  maxLength: 40,
 },
 {
  type: "email",
  id: "email",
  name: "email",
  label: "Email",
  value: "",
  maxLength: 100,
 },
 {
  type: "text",
  id: "cpf",
  name: "cpf",
  label: "CPF",
  value: "",
  maxLength: 11,
 }
];

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          { inputs.map(({ type, id, name, label, value, maxLength }) => (
            <Input
              type={ type }
              id={ id }
              name= { name }
              label={ label }
              value={ value }
              maxLength={ maxLength }
            />
          )) }
        </fieldset>
      </form>
    );
  }
}

export default Form;