import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
  test('tests if a click increases the value', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 }}});

    expect(queryByText('Clique aqui')).toBeInTheDocument();
    userEvent.click(queryByText('Clique aqui'));
    expect(queryByText('1')).toBeInTheDocument();
  });
  test('tests if the number is being incremented with the click', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    expect(queryByText('Clique aqui')).toBeInTheDocument();
    userEvent.click(queryByText('Clique aqui'));
    expect(queryByText('11')).toBeInTheDocument();
  });
});
