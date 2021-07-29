import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchDog } from './actions';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading...</p>
    : (
      <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={ src } alt="dog" />
        </div>
    )
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  src: state.imagePath,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
