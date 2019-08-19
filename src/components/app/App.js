import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { increment, decrement, incrementIfOdd } from '../../actions/counter';

export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.count}</h1>
        <div className="buttons">
          <button onClick={() => props.decrement()}>decrement</button>
          <button onClick={() => props.increment()}>increment</button>
        </div>
      </header>
    </div>
  );
}

export default connect(
  state => state.counter,
  { increment, decrement, incrementIfOdd }
)(App);
