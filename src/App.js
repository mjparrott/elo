import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { configs } = this.props
    console.log(configs)
    return (
      <div>
        <header>
        </header>
        <main>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
