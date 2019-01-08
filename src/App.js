import './index.css';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p className={this.state.count > 7 ? 'warning' : null}>
          Count: {this.state.count}
        </p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default hot(module)(App);
