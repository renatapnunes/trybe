import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
          <ButtonClicks />
          <NumberClicks />
        {/* </Provider> */}
      </div>
    );
  }
}
export default App;
