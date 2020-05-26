import React from 'react';
import Counter2 from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <Counter2 count={this.state.count} onAdd={this.increaseCount.bind(this)} />;
  }
}

export default App;
