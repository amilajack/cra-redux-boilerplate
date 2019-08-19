import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './reducers/counter';

function configureStore() {
  const rootReducer = combineReducers({ counter: counterReducer });
  return createStore(rootReducer, {});
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
