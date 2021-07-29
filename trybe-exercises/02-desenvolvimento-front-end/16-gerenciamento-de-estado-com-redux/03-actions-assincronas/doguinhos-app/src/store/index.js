// import { composeWithDevTools } from 'redux-dev_tools_extension';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// const thunkFunc = applyMiddleware(thunk);
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(applyMiddleware(thunk)))
)

export default store;